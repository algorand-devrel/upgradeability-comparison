import {
  describe, test, expect, beforeAll, beforeEach
} from '@jest/globals';
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { MsigCheckClient } from '../contracts/clients/MsigCheckClient';

const fixture = algorandFixture();

let appClient: MsigCheckClient;

describe('Migration', () => {
  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    const { algod, testAccount } = fixture.context;

    appClient = new MsigCheckClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );
  });

  // test('Msig creator', async () => {
  //   await appClient.create.createApplication({
  //     version: msigVersion,
  //     participants: [
  //       msigParticipants[0].addr,
  //       msigParticipants[1].addr,
  //       msigParticipants[2].addr,
  //       msigParticipants[3].addr,
  //       msigParticipants[4].addr,
  //     ],
  //   });
  // });
});
