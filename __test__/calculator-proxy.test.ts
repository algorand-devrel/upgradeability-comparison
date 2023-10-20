import {
  describe, test, expect, beforeAll, beforeEach
} from '@jest/globals';
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { microAlgos } from '@algorandfoundation/algokit-utils';
import { CalculatorProxyClient } from '../contracts/clients/CalculatorProxyClient';
import { ImmutableOldClient } from '../contracts/clients/ImmutableOldClient';
import { ImmutableNewClient } from '../contracts/clients/ImmutableNewClient';

const fixture = algorandFixture();

let calcPClient: CalculatorProxyClient;
let immOClient: ImmutableOldClient;
let immNClient: ImmutableNewClient;

describe('ProxyPattern', () => {
  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    const { algod, testAccount } = fixture.context;

    calcPClient = new CalculatorProxyClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );
    immOClient = new ImmutableOldClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );
    immNClient = new ImmutableNewClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );

    await Promise.all(
      [calcPClient, immOClient, immNClient]
        .map((client) => client.create.createApplication({}))
    );
  });

  test('Update', async () => {
    const [calcPReference, immOReference, immNReference] = await Promise.all([
      calcPClient.appClient.getAppReference(),
      immOClient.appClient.getAppReference(),
      immNClient.appClient.getAppReference(),
    ]);

    await Promise.all([
      calcPClient.setTargetApplication({ app: immOReference.appId }),
      immOClient.setSourceApplication({ app: calcPReference.appId }),
    ]);

    const wrongResult = await calcPClient.sum(
      { a: 2, b: 3, targetApp: immOReference.appId },
      { sendParams: { fee: microAlgos(2_000) } },
    );
    expect(wrongResult.return).toBe(BigInt(4));

    await Promise.all([
      calcPClient.setTargetApplication({ app: immNReference.appId }),
      immNClient.setSourceApplication({ app: calcPReference.appId }),
    ]);

    const correctResult = await calcPClient.sum(
      { a: 2, b: 3, targetApp: immNReference.appId },
      { sendParams: { fee: microAlgos(2_000) } },
    );
    expect(correctResult.return).toBe(BigInt(5));
  });
});
