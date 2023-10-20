import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class ImmutableV4 extends Contract {
  sourceApplication = GlobalStateKey<Application>();

  storageApplication = GlobalStateKey<Application>();

  setSourceApplication(app: Application): void {
    assert(this.txn.sender === this.app.creator);
    this.sourceApplication.value = app;
  }

  setStorageApplication(app: Application): void {
    assert(this.txn.sender === this.app.creator);
    this.storageApplication.value = app;
  }

  // eslint-disable-next-line no-unused-vars
  sum(a: number, b: number, sourceApp: Application): number {
    assert(this.txn.sender === this.sourceApplication.value.address);
    return a + b;
  }

  // eslint-disable-next-line no-unused-vars
  sumMR(a: number, sourceApp: Application, storageApp: Application): number {
    assert(this.txn.sender === this.sourceApplication.value.address);
    return a + castBytes<number>(this.storageApplication.value.global('m'));
  }

  // eslint-disable-next-line no-unused-vars
  ms(value: number, sourceApp: Application, storageApp: Application): void {
    assert(this.txn.sender === this.sourceApplication.value.address);
    sendMethodCall<[number, Application], void>({
      applicationID: this.storageApplication.value,
      name: 'setMemory',
      methodArgs: [value, this.app],
    });
  }
}
