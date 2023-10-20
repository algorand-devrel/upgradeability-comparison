import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class CalculatorProxyV2 extends Contract {
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

  sumMR(a: number, targetApp: Application, storageApp: Application): number {
    return sendMethodCall<[number, Application, Application], uint64>({
      applicationID: this.targetApplication.value,
      name: 'sumMR',
      methodArgs: [a, this.app, storageApp],
    });
  }

  ms(value: number, targetApp: Application, storageApp: Application): void {
    sendMethodCall<[number, Application, Application], void>({
      applicationID: this.targetApplication.value,
      name: 'ms',
      methodArgs: [value, this.app, storageApp],
    });
  }
}
