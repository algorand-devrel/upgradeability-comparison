import {
  describe, test, expect, beforeAll, beforeEach
} from '@jest/globals';
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { MigrationClient } from '../contracts/clients/MigrationClient';

const fixture = algorandFixture();

let appClient: MigrationClient;

describe('Migration', () => {
  const msigVersion = 1;
  let msigParticipants: [
    algosdk.Account,
    algosdk.Account,
    algosdk.Account,
    algosdk.Account,
    algosdk.Account,
  ];
  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    const { algod, kmd } = fixture.context;
    msigParticipants = [
      algosdk.generateAccount(),
      algosdk.generateAccount(),
      algosdk.generateAccount(),
      algosdk.generateAccount(),
      algosdk.generateAccount(),
    ];
    await Promise.all(
      msigParticipants.map((account) => algokit.ensureFunded({
        accountToFund: account,
        minSpendingBalance: algokit.algos(0),
      }, algod, kmd)),
    );
    const creator = algokit.multisigAccount({
      version: msigVersion,
      threshold: 3,
      addrs: msigParticipants.map((account) => account.addr),
    }, msigParticipants);
    await algokit.ensureFunded({
      accountToFund: creator,
      minSpendingBalance: algokit.algos(1e4),
    }, algod, kmd);

    appClient = new MigrationClient(
      {
        sender: creator,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );
  });

  test('Msig creator', async () => {
    await appClient.create.createApplication({
      version: msigVersion,
      participants: [
        msigParticipants[0].addr,
        msigParticipants[1].addr,
        msigParticipants[2].addr,
        msigParticipants[3].addr,
        msigParticipants[4].addr,
      ],
    });
  });
});
