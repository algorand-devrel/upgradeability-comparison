import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class CalculatorProxyV1 extends Contract {
  targetApplication = GlobalStateKey<Application>();

  setTargetApplication(app: Application): void {
    assert(this.txn.sender === this.app.creator);
    this.targetApplication.value = app;
  }

  // eslint-disable-next-line no-unused-vars
  sum(a: number, b: number, targetApp: Application): number {
    return sendMethodCall<[number, number, Application], uint64>({
      applicationID: this.targetApplication.value,
      name: 'sum',
      methodArgs: [a, b, this.app],
    });
  }
}
