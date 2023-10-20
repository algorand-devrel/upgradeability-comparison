import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class Migration extends Contract {
  // There are at most 64 global storage slots so the sum of
  //  the bytes and ints should be less than that.
  // globalInts = GlobalStateMap<bytes, number>({ maxKeys: 32, prefix: 'i-' });
  globalInts = GlobalStateMap<bytes, number>({ maxKeys: 32 });

  // globalBytes = GlobalStateMap<bytes, bytes>({ maxKeys: 32, prefix: 'b-' });
  globalBytes = GlobalStateMap<bytes, bytes>({ maxKeys: 32 });

  boxBytes = BoxMap<bytes, bytes>();

  migrateASA(asa: Asset): void {
    sendAssetTransfer({
      assetSender: this.txn.sender,
      assetReceiver: this.txn.sender,
      xferAsset: asa,
      assetAmount: 0,
      fee: 0,
    });
  }

  migrateGlobalInt(key: bytes, value: number): void {
    this.globalInts(key).value = value;
  }

  migrateGlobalBytes(key: bytes, value: bytes): void {
    this.globalBytes(key).value = value;
  }

  migrateBoxBytes(key: bytes, value: bytes): void {
    this.boxBytes(key).value = value;
  }
}
