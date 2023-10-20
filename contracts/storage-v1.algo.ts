import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class StorageV1 extends Contract {
  sourceApplication = GlobalStateKey<Application>();

  memory = GlobalStateKey<number>({ key: 'm' });

  setSourceApplication(app: Application): void {
    assert(this.txn.sender === this.app.creator);
    this.sourceApplication.value = app;
  }

  // eslint-disable-next-line no-unused-vars
  setMemory(value: number, sourceApp: Application): void {
    assert(this.txn.sender === this.sourceApplication.value.address);
    this.memory.value = value;
  }
}
