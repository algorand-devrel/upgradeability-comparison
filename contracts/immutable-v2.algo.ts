import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class ImmutableV2 extends Contract {
  sourceApplication = GlobalStateKey<Application>();

  setSourceApplication(app: Application): void {
    assert(this.txn.sender === this.app.creator);
    this.sourceApplication.value = app;
  }

  // eslint-disable-next-line no-unused-vars
  sum(a: number, b: number, sourceApp: Application): number {
    assert(this.txn.sender === this.sourceApplication.value.address);
    return a + b;
  }
}
