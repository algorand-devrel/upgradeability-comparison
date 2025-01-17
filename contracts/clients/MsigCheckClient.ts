/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import { Algodv2, OnApplicationComplete, Transaction, TransactionWithSigner, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "createApplication(uint64,address[5])void": {
      "call_config": {
        "no_op": "CREATE"
      }
    },
    "updateApplication()void": {
      "call_config": {
        "update_application": "CALL"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {},
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNDcuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmQtZGV2cmVsL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIGNhbGxfVXBkYXRlQXBwbGljYXRpb24KCk5PVF9JTVBMRU1FTlRFRDoKCWVycgoKLy8gY3JlYXRlQXBwbGljYXRpb24oYWRkcmVzc1s1XSx1aW50NjQpdm9pZAphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CgkvLyBwYXJ0aWNpcGFudHM6IGFkZHJlc3NbNV0KCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCgkvLyB2ZXJzaW9uOiB1aW50NjQKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWJ0b2kKCgkvLyBleGVjdXRlIGNyZWF0ZUFwcGxpY2F0aW9uKGFkZHJlc3NbNV0sdWludDY0KXZvaWQKCWNhbGxzdWIgY3JlYXRlQXBwbGljYXRpb24KCWludCAxCglyZXR1cm4KCmNyZWF0ZUFwcGxpY2F0aW9uOgoJcHJvdG8gMiAwCgoJLy8gY29udHJhY3RzL21zaWctY2hlY2suYWxnby50czoxMQoJLy8gYXNzZXJ0KHNoYTUxMl8yNTYoCgkvLyAgICAgICAnTXVsdGlzaWdBZGRyJwoJLy8gICAgICAgKyBleHRyYWN0MyhpdG9iKHZlcnNpb24pLCA3LCAxKQoJLy8gICAgICAgKyBleHRyYWN0MyhpdG9iKDMpLCA3LCAxKQoJLy8gICAgICAgKyByYXdCeXRlcyhwYXJ0aWNpcGFudHNbMF0pCgkvLyAgICAgICArIHJhd0J5dGVzKHBhcnRpY2lwYW50c1sxXSkKCS8vICAgICAgICsgcmF3Qnl0ZXMocGFydGljaXBhbnRzWzJdKQoJLy8gICAgICAgKyByYXdCeXRlcyhwYXJ0aWNpcGFudHNbM10pCgkvLyAgICAgICArIHJhd0J5dGVzKHBhcnRpY2lwYW50c1s0XSksCgkvLyAgICAgKSA9PT0gY2FzdEJ5dGVzPGJ5dGVbMzJdPih0aGlzLnR4bi5zZW5kZXIpKQoJYnl0ZSAiTXVsdGlzaWdBZGRyIgoJZnJhbWVfZGlnIC0xIC8vIHZlcnNpb246IHVpbnQ2NAoJaXRvYgoJaW50IDcKCWludCAxCglleHRyYWN0MwoJY29uY2F0CglieXRlIDB4MDAwMDAwMDAwMDAwMDAwMwoJaW50IDcKCWludCAxCglleHRyYWN0MwoJY29uY2F0CglmcmFtZV9kaWcgLTIgLy8gcGFydGljaXBhbnRzOiBhZGRyZXNzWzVdCglleHRyYWN0IDAgMzIKCWNvbmNhdAoJZnJhbWVfZGlnIC0yIC8vIHBhcnRpY2lwYW50czogYWRkcmVzc1s1XQoJZXh0cmFjdCAzMiAzMgoJY29uY2F0CglmcmFtZV9kaWcgLTIgLy8gcGFydGljaXBhbnRzOiBhZGRyZXNzWzVdCglleHRyYWN0IDY0IDMyCgljb25jYXQKCWZyYW1lX2RpZyAtMiAvLyBwYXJ0aWNpcGFudHM6IGFkZHJlc3NbNV0KCWV4dHJhY3QgOTYgMzIKCWNvbmNhdAoJZnJhbWVfZGlnIC0yIC8vIHBhcnRpY2lwYW50czogYWRkcmVzc1s1XQoJZXh0cmFjdCAxMjggMzIKCWNvbmNhdAoJc2hhNTEyXzI1NgoJdHhuIFNlbmRlcgoJPT0KCWFzc2VydAoJcmV0c3ViCgovLyB1cGRhdGVBcHBsaWNhdGlvbigpdm9pZAphYmlfcm91dGVfdXBkYXRlQXBwbGljYXRpb246CgkvLyBleGVjdXRlIHVwZGF0ZUFwcGxpY2F0aW9uKCl2b2lkCgljYWxsc3ViIHVwZGF0ZUFwcGxpY2F0aW9uCglpbnQgMQoJcmV0dXJuCgp1cGRhdGVBcHBsaWNhdGlvbjoKCXByb3RvIDAgMAoKCS8vIGNvbnRyYWN0cy9tc2lnLWNoZWNrLmFsZ28udHM6MjQKCS8vIGFzc2VydCh0aGlzLnR4bi5zZW5kZXIgPT09IHRoaXMuYXBwLmNyZWF0b3IpCgl0eG4gU2VuZGVyCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCglhc3NlcnQKCT09Cglhc3NlcnQKCXJldHN1YgoKY3JlYXRlX05vT3A6CgltZXRob2QgImNyZWF0ZUFwcGxpY2F0aW9uKHVpbnQ2NCxhZGRyZXNzWzVdKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCWVycgoKY2FsbF9VcGRhdGVBcHBsaWNhdGlvbjoKCW1ldGhvZCAidXBkYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfdXBkYXRlQXBwbGljYXRpb24KCWVycg==",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDkKaW50IDE="
  },
  "contract": {
    "name": "MsigCheck",
    "desc": "",
    "methods": [
      {
        "name": "createApplication",
        "args": [
          {
            "name": "version",
            "type": "uint64",
            "desc": ""
          },
          {
            "name": "participants",
            "type": "address[5]",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "updateApplication",
        "args": [],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the MsigCheck smart contract.
 */
export type MsigCheck = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'createApplication(uint64,address[5])void' | 'createApplication', {
      argsObj: {
        version: bigint | number
        participants: [string, string, string, string, string]
      }
      argsTuple: [version: bigint | number, participants: [string, string, string, string, string]]
      returns: void
    }>
    & Record<'updateApplication()void' | 'updateApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
}
/**
 * Defines the possible abi call signatures
 */
export type MsigCheckSig = keyof MsigCheck['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends MsigCheckSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the MsigCheck smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends MsigCheckSig> = MsigCheck['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the MsigCheck smart contract to the method's return type
 */
export type MethodReturn<TSignature extends MsigCheckSig> = MsigCheck['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type MsigCheckCreateCalls = (typeof MsigCheckCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type MsigCheckCreateCallParams =
  | (TypedCallParams<'createApplication(uint64,address[5])void'> & (OnCompleteNoOp))
/**
 * A factory for available 'update' calls
 */
export type MsigCheckUpdateCalls = (typeof MsigCheckCallFactory)['update']
/**
 * Defines supported update methods for this smart contract
 */
export type MsigCheckUpdateCallParams =
  | TypedCallParams<'updateApplication()void'>
/**
 * Defines arguments required for the deploy method.
 */
export type MsigCheckDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: MsigCheckCreateCalls) => MsigCheckCreateCallParams
  /**
   * A delegate which takes a update call factory and returns the update call params for this smart contract
   */
  updateCall?: (callFactory: MsigCheckUpdateCalls) => MsigCheckUpdateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class MsigCheckCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the MsigCheck smart contract using the createApplication(uint64,address[5])void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication(uint64,address[5])void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication(uint64,address[5])void' as const,
          methodArgs: Array.isArray(args) ? args : [args.version, args.participants],
          ...params,
        }
      },
    }
  }

  /**
   * Gets available update call factories
   */
  static get update() {
    return {
      /**
       * Constructs an update call for the MsigCheck smart contract using the updateApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      updateApplication(args: MethodArgs<'updateApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams = {}) {
        return {
          method: 'updateApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

}

/**
 * A client to make calls to the MsigCheck smart contract
 */
export class MsigCheckClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `MsigCheckClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof MsigCheck['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the MsigCheck smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: MsigCheckDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(MsigCheckCallFactory.create)
    const updateArgs = params.updateCall?.(MsigCheckCallFactory.update)
    return this.appClient.deploy({
      ...params,
      updateArgs,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the MsigCheck smart contract using the createApplication(uint64,address[5])void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication(uint64,address[5])void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication(uint64,address[5])void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(MsigCheckCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Gets available update methods
   */
  public get update() {
    const $this = this
    return {
      /**
       * Updates an existing instance of the MsigCheck smart contract using the updateApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The update result
       */
      async updateApplication(args: MethodArgs<'updateApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'updateApplication()void'>>> {
        return $this.mapReturnValue(await $this.appClient.update(MsigCheckCallFactory.update.updateApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the MsigCheck smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  public compose(): MsigCheckComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      get update() {
        const $this = this
        return {
          updateApplication(args: MethodArgs<'updateApplication()void'>, params?: AppClientCallCoreParams & AppClientCompilationParams) {
            promiseChain = promiseChain.then(() => client.update.updateApplication(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
            resultMappers.push(undefined)
            return $this
          },
        }
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as MsigCheckComposer
  }
}
export type MsigCheckComposer<TReturns extends [...any[]] = []> = {
  /**
   * Gets available update methods
   */
  readonly update: {
    /**
     * Updates an existing instance of the MsigCheck smart contract using the updateApplication()void ABI method.
     *
     * @param args The arguments for the smart contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    updateApplication(args: MethodArgs<'updateApplication()void'>, params?: AppClientCallCoreParams & AppClientCompilationParams): MsigCheckComposer<[...TReturns, MethodReturn<'updateApplication()void'>]>
  }

  /**
   * Makes a clear_state call to an existing instance of the MsigCheck smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): MsigCheckComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): MsigCheckComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<MsigCheckComposerResults<TReturns>>
}
export type MsigCheckComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
