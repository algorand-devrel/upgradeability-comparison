import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class MsigCheck extends Contract {
  createApplication(
    version: number,
    participants: StaticArray<Address, 5>,
  ): void {
    // TODO: Resolve bugs in TEALScript that prevents us from doing this
    // assert(participants.length === 5);
    assert(sha512_256(
      'MultisigAddr'
      + extract3(itob(version), 7, 1)
      + extract3(itob(3), 7, 1)
      + rawBytes(participants[0])
      + rawBytes(participants[1])
      + rawBytes(participants[2])
      + rawBytes(participants[3])
      + rawBytes(participants[4]),
    ) === castBytes<byte[32]>(this.txn.sender));
  }

  updateApplication(): void {
    assert(this.txn.sender === this.app.creator);
  }
}
