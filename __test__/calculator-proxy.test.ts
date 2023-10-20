import {
  describe, test, expect, beforeAll, beforeEach
} from '@jest/globals';
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { microAlgos } from '@algorandfoundation/algokit-utils';
import { CalculatorProxyV1Client } from '../contracts/clients/CalculatorProxyV1Client';
import { CalculatorProxyV2Client } from '../contracts/clients/CalculatorProxyV2Client';
import { ImmutableV1Client } from '../contracts/clients/ImmutableV1Client';
import { ImmutableV2Client } from '../contracts/clients/ImmutableV2Client';
import { ImmutableV3Client } from '../contracts/clients/ImmutableV3Client';
import { StorageV1Client } from '../contracts/clients/StorageV1Client';

const fixture = algorandFixture();

let calcPV1Client: CalculatorProxyV1Client;
let calcPV2Client: CalculatorProxyV2Client;
let immV1Client: ImmutableV1Client;
let immV2Client: ImmutableV2Client;
let immV3Client: ImmutableV3Client;
let stoV1Client: StorageV1Client;

describe('ProxyPattern', () => {
  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    const { algod, testAccount } = fixture.context;

    calcPV1Client = new CalculatorProxyV1Client(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );
    calcPV2Client = new CalculatorProxyV2Client(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );
    immV1Client = new ImmutableV1Client(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );
    immV2Client = new ImmutableV2Client(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );
    immV3Client = new ImmutableV3Client(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );
    stoV1Client = new StorageV1Client(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );

    await Promise.all(
      [calcPV1Client, calcPV2Client, immV1Client, immV2Client, immV3Client, stoV1Client]
        .map((client) => client.create.createApplication({}))
    );
  });

  test('v1 -> v2', async () => {
    const [calcPV1Reference, immV1Reference, immV2Reference] = await Promise.all([
      calcPV1Client.appClient.getAppReference(),
      immV1Client.appClient.getAppReference(),
      immV2Client.appClient.getAppReference(),
    ]);

    await Promise.all([
      calcPV1Client.setTargetApplication({ app: immV1Reference.appId }),
      immV1Client.setSourceApplication({ app: calcPV1Reference.appId }),
    ]);

    const wrongResult = await calcPV1Client.sum(
      { a: 2, b: 3, targetApp: immV1Reference.appId },
      { sendParams: { fee: microAlgos(2_000) } },
    );
    expect(wrongResult.return).toBe(BigInt(4));

    await Promise.all([
      calcPV1Client.setTargetApplication({ app: immV2Reference.appId }),
      immV2Client.setSourceApplication({ app: calcPV1Reference.appId }),
    ]);

    const correctResult = await calcPV1Client.sum(
      { a: 2, b: 3, targetApp: immV2Reference.appId },
      { sendParams: { fee: microAlgos(2_000) } },
    );
    expect(correctResult.return).toBe(BigInt(5));
  });

  test('v2 -> v3', async () => {
    // Since the interface of the contract changes. We are going to change the proxy as well.
    const [calcPV2Reference, immV3Reference, stoV1Reference] = await Promise.all([
      calcPV2Client.appClient.getAppReference(),
      immV3Client.appClient.getAppReference(),
      stoV1Client.appClient.getAppReference(),
    ]);

    await Promise.all([
      calcPV2Client.setTargetApplication({ app: immV3Reference.appId }),
      immV3Client.setSourceApplication({ app: calcPV2Reference.appId }),
      immV3Client.setStorageApplication({ app: stoV1Reference.appId }),
      stoV1Client.setSourceApplication({ app: immV3Reference.appId }),
    ]);

    await calcPV2Client.ms(
      { value: 2, targetApp: immV3Reference.appId, storageApp: stoV1Reference.appId },
      { sendParams: { fee: microAlgos(3_000) } },
    );

    const wrongResult = await calcPV2Client.sumMr(
      { a: 3, targetApp: immV3Reference.appId, storageApp: stoV1Reference.appId },
      { sendParams: { fee: microAlgos(3_000) } },
    );
    expect(wrongResult.return).toBe(BigInt(1));
  });
});
