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
    "setSourceApplication(application)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "setStorageApplication(application)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "sum(uint64,uint64,application)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "sumMR(uint64,application,application)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "ms(uint64,application,application)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
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
      "declared": {
        "sourceApplication": {
          "type": "uint64",
          "key": "sourceApplication"
        },
        "storageApplication": {
          "type": "uint64",
          "key": "storageApplication"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 2
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNDcuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmQtZGV2cmVsL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCi8vIHNldFNvdXJjZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uKXZvaWQKYWJpX3JvdXRlX3NldFNvdXJjZUFwcGxpY2F0aW9uOgoJLy8gYXBwOiBhcHBsaWNhdGlvbgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJYnRvaQoJdHhuYXMgQXBwbGljYXRpb25zCgoJLy8gZXhlY3V0ZSBzZXRTb3VyY2VBcHBsaWNhdGlvbihhcHBsaWNhdGlvbil2b2lkCgljYWxsc3ViIHNldFNvdXJjZUFwcGxpY2F0aW9uCglpbnQgMQoJcmV0dXJuCgpzZXRTb3VyY2VBcHBsaWNhdGlvbjoKCXByb3RvIDEgMAoKCS8vIGNvbnRyYWN0cy9pbW11dGFibGUtdjQuYWxnby50czoxMAoJLy8gYXNzZXJ0KHRoaXMudHhuLnNlbmRlciA9PT0gdGhpcy5hcHAuY3JlYXRvcikKCXR4biBTZW5kZXIKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcENyZWF0b3IKCWFzc2VydAoJPT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9pbW11dGFibGUtdjQuYWxnby50czoxMQoJLy8gdGhpcy5zb3VyY2VBcHBsaWNhdGlvbi52YWx1ZSA9IGFwcAoJYnl0ZSAic291cmNlQXBwbGljYXRpb24iCglmcmFtZV9kaWcgLTEgLy8gYXBwOiBhcHBsaWNhdGlvbgoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gc2V0U3RvcmFnZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uKXZvaWQKYWJpX3JvdXRlX3NldFN0b3JhZ2VBcHBsaWNhdGlvbjoKCS8vIGFwcDogYXBwbGljYXRpb24KCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWJ0b2kKCXR4bmFzIEFwcGxpY2F0aW9ucwoKCS8vIGV4ZWN1dGUgc2V0U3RvcmFnZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uKXZvaWQKCWNhbGxzdWIgc2V0U3RvcmFnZUFwcGxpY2F0aW9uCglpbnQgMQoJcmV0dXJuCgpzZXRTdG9yYWdlQXBwbGljYXRpb246Cglwcm90byAxIDAKCgkvLyBjb250cmFjdHMvaW1tdXRhYmxlLXY0LmFsZ28udHM6MTUKCS8vIGFzc2VydCh0aGlzLnR4bi5zZW5kZXIgPT09IHRoaXMuYXBwLmNyZWF0b3IpCgl0eG4gU2VuZGVyCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCglhc3NlcnQKCT09Cglhc3NlcnQKCgkvLyBjb250cmFjdHMvaW1tdXRhYmxlLXY0LmFsZ28udHM6MTYKCS8vIHRoaXMuc3RvcmFnZUFwcGxpY2F0aW9uLnZhbHVlID0gYXBwCglieXRlICJzdG9yYWdlQXBwbGljYXRpb24iCglmcmFtZV9kaWcgLTEgLy8gYXBwOiBhcHBsaWNhdGlvbgoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gc3VtKGFwcGxpY2F0aW9uLHVpbnQ2NCx1aW50NjQpdWludDY0Ci8vCi8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycwphYmlfcm91dGVfc3VtOgoJLy8gc291cmNlQXBwOiBhcHBsaWNhdGlvbgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwoJYnRvaQoJdHhuYXMgQXBwbGljYXRpb25zCgoJLy8gYjogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglidG9pCgoJLy8gYTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBzdW0oYXBwbGljYXRpb24sdWludDY0LHVpbnQ2NCl1aW50NjQKCWNhbGxzdWIgc3VtCglpbnQgMQoJcmV0dXJuCgpzdW06Cglwcm90byAzIDAKCgkvLyBjb250cmFjdHMvaW1tdXRhYmxlLXY0LmFsZ28udHM6MjEKCS8vIGFzc2VydCh0aGlzLnR4bi5zZW5kZXIgPT09IHRoaXMuc291cmNlQXBwbGljYXRpb24udmFsdWUuYWRkcmVzcykKCXR4biBTZW5kZXIKCWJ5dGUgInNvdXJjZUFwcGxpY2F0aW9uIgoJYXBwX2dsb2JhbF9nZXQKCWFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKCWFzc2VydAoJPT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9pbW11dGFibGUtdjQuYWxnby50czoyMgoJLy8gcmV0dXJuIGEgKyBiOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NAoJZnJhbWVfZGlnIC0yIC8vIGI6IHVpbnQ2NAoJKwoJaXRvYgoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgovLyBzdW1NUihhcHBsaWNhdGlvbixhcHBsaWNhdGlvbix1aW50NjQpdWludDY0Ci8vCi8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycwphYmlfcm91dGVfc3VtTVI6CgkvLyBzdG9yYWdlQXBwOiBhcHBsaWNhdGlvbgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwoJYnRvaQoJdHhuYXMgQXBwbGljYXRpb25zCgoJLy8gc291cmNlQXBwOiBhcHBsaWNhdGlvbgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgoJYnRvaQoJdHhuYXMgQXBwbGljYXRpb25zCgoJLy8gYTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBzdW1NUihhcHBsaWNhdGlvbixhcHBsaWNhdGlvbix1aW50NjQpdWludDY0CgljYWxsc3ViIHN1bU1SCglpbnQgMQoJcmV0dXJuCgpzdW1NUjoKCXByb3RvIDMgMAoKCS8vIGNvbnRyYWN0cy9pbW11dGFibGUtdjQuYWxnby50czoyNwoJLy8gYXNzZXJ0KHRoaXMudHhuLnNlbmRlciA9PT0gdGhpcy5zb3VyY2VBcHBsaWNhdGlvbi52YWx1ZS5hZGRyZXNzKQoJdHhuIFNlbmRlcgoJYnl0ZSAic291cmNlQXBwbGljYXRpb24iCglhcHBfZ2xvYmFsX2dldAoJYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwoJYXNzZXJ0Cgk9PQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL2ltbXV0YWJsZS12NC5hbGdvLnRzOjI4CgkvLyByZXR1cm4gYSArIGNhc3RCeXRlczxudW1iZXI+KHRoaXMuc3RvcmFnZUFwcGxpY2F0aW9uLnZhbHVlLmdsb2JhbCgnbScpKTsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjQKCWJ5dGUgInN0b3JhZ2VBcHBsaWNhdGlvbiIKCWFwcF9nbG9iYWxfZ2V0CglieXRlICJtIgoJYXBwX2dsb2JhbF9nZXRfZXgKCWFzc2VydAoJKwoJaXRvYgoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgovLyBtcyhhcHBsaWNhdGlvbixhcHBsaWNhdGlvbix1aW50NjQpdm9pZAovLwovLyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMKYWJpX3JvdXRlX21zOgoJLy8gc3RvcmFnZUFwcDogYXBwbGljYXRpb24KCXR4bmEgQXBwbGljYXRpb25BcmdzIDMKCWJ0b2kKCXR4bmFzIEFwcGxpY2F0aW9ucwoKCS8vIHNvdXJjZUFwcDogYXBwbGljYXRpb24KCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWJ0b2kKCXR4bmFzIEFwcGxpY2F0aW9ucwoKCS8vIHZhbHVlOiB1aW50NjQKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWJ0b2kKCgkvLyBleGVjdXRlIG1zKGFwcGxpY2F0aW9uLGFwcGxpY2F0aW9uLHVpbnQ2NCl2b2lkCgljYWxsc3ViIG1zCglpbnQgMQoJcmV0dXJuCgptczoKCXByb3RvIDMgMAoKCS8vIGNvbnRyYWN0cy9pbW11dGFibGUtdjQuYWxnby50czozMwoJLy8gYXNzZXJ0KHRoaXMudHhuLnNlbmRlciA9PT0gdGhpcy5zb3VyY2VBcHBsaWNhdGlvbi52YWx1ZS5hZGRyZXNzKQoJdHhuIFNlbmRlcgoJYnl0ZSAic291cmNlQXBwbGljYXRpb24iCglhcHBfZ2xvYmFsX2dldAoJYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwoJYXNzZXJ0Cgk9PQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL2ltbXV0YWJsZS12NC5hbGdvLnRzOjM0CgkvLyBzZW5kTWV0aG9kQ2FsbDxbbnVtYmVyLCBBcHBsaWNhdGlvbl0sIHZvaWQ+KHsKCS8vICAgICAgIGFwcGxpY2F0aW9uSUQ6IHRoaXMuc3RvcmFnZUFwcGxpY2F0aW9uLnZhbHVlLAoJLy8gICAgICAgbmFtZTogJ3NldE1lbW9yeScsCgkvLyAgICAgICBtZXRob2RBcmdzOiBbdmFsdWUsIHRoaXMuYXBwXSwKCS8vICAgICB9KQoJaXR4bl9iZWdpbgoJaW50IGFwcGwKCWl0eG5fZmllbGQgVHlwZUVudW0KCW1ldGhvZCAic2V0TWVtb3J5KHVpbnQ2NCxhcHBsaWNhdGlvbil2b2lkIgoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKCgkvLyBjb250cmFjdHMvaW1tdXRhYmxlLXY0LmFsZ28udHM6MzUKCS8vIGFwcGxpY2F0aW9uSUQ6IHRoaXMuc3RvcmFnZUFwcGxpY2F0aW9uLnZhbHVlCglieXRlICJzdG9yYWdlQXBwbGljYXRpb24iCglhcHBfZ2xvYmFsX2dldAoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECgoJLy8gY29udHJhY3RzL2ltbXV0YWJsZS12NC5hbGdvLnRzOjM3CgkvLyBtZXRob2RBcmdzOiBbdmFsdWUsIHRoaXMuYXBwXQoJZnJhbWVfZGlnIC0xIC8vIHZhbHVlOiB1aW50NjQKCWl0b2IKCWl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9ucwoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMDEKCWl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCgoJLy8gRmVlIGZpZWxkIG5vdCBzZXQsIGRlZmF1bHRpbmcgdG8gMAoJaW50IDAKCWl0eG5fZmllbGQgRmVlCgoJLy8gU3VibWl0IGlubmVyIHRyYW5zYWN0aW9uCglpdHhuX3N1Ym1pdAoJcmV0c3ViCgphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CglpbnQgMQoJcmV0dXJuCgpjcmVhdGVfTm9PcDoKCW1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCWVycgoKY2FsbF9Ob09wOgoJbWV0aG9kICJzZXRTb3VyY2VBcHBsaWNhdGlvbihhcHBsaWNhdGlvbil2b2lkIgoJbWV0aG9kICJzZXRTdG9yYWdlQXBwbGljYXRpb24oYXBwbGljYXRpb24pdm9pZCIKCW1ldGhvZCAic3VtKHVpbnQ2NCx1aW50NjQsYXBwbGljYXRpb24pdWludDY0IgoJbWV0aG9kICJzdW1NUih1aW50NjQsYXBwbGljYXRpb24sYXBwbGljYXRpb24pdWludDY0IgoJbWV0aG9kICJtcyh1aW50NjQsYXBwbGljYXRpb24sYXBwbGljYXRpb24pdm9pZCIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoIGFiaV9yb3V0ZV9zZXRTb3VyY2VBcHBsaWNhdGlvbiBhYmlfcm91dGVfc2V0U3RvcmFnZUFwcGxpY2F0aW9uIGFiaV9yb3V0ZV9zdW0gYWJpX3JvdXRlX3N1bU1SIGFiaV9yb3V0ZV9tcwoJZXJy",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDkKaW50IDE="
  },
  "contract": {
    "name": "ImmutableV4",
    "desc": "",
    "methods": [
      {
        "name": "setSourceApplication",
        "args": [
          {
            "name": "app",
            "type": "application",
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
        "name": "setStorageApplication",
        "args": [
          {
            "name": "app",
            "type": "application",
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
        "name": "sum",
        "args": [
          {
            "name": "a",
            "type": "uint64",
            "desc": ""
          },
          {
            "name": "b",
            "type": "uint64",
            "desc": ""
          },
          {
            "name": "sourceApp",
            "type": "application",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "uint64",
          "desc": ""
        }
      },
      {
        "name": "sumMR",
        "args": [
          {
            "name": "a",
            "type": "uint64",
            "desc": ""
          },
          {
            "name": "sourceApp",
            "type": "application",
            "desc": ""
          },
          {
            "name": "storageApp",
            "type": "application",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "uint64",
          "desc": ""
        }
      },
      {
        "name": "ms",
        "args": [
          {
            "name": "value",
            "type": "uint64",
            "desc": ""
          },
          {
            "name": "sourceApp",
            "type": "application",
            "desc": ""
          },
          {
            "name": "storageApp",
            "type": "application",
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
        "name": "createApplication",
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        },
        "args": []
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
 * Defines the types of available calls and state of the ImmutableV4 smart contract.
 */
export type ImmutableV4 = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'setSourceApplication(application)void' | 'setSourceApplication', {
      argsObj: {
        app: number | bigint
      }
      argsTuple: [app: number | bigint]
      returns: void
    }>
    & Record<'setStorageApplication(application)void' | 'setStorageApplication', {
      argsObj: {
        app: number | bigint
      }
      argsTuple: [app: number | bigint]
      returns: void
    }>
    & Record<'sum(uint64,uint64,application)uint64' | 'sum', {
      argsObj: {
        a: bigint | number
        b: bigint | number
        sourceApp: number | bigint
      }
      argsTuple: [a: bigint | number, b: bigint | number, sourceApp: number | bigint]
      returns: bigint
    }>
    & Record<'sumMR(uint64,application,application)uint64' | 'sumMR', {
      argsObj: {
        a: bigint | number
        sourceApp: number | bigint
        storageApp: number | bigint
      }
      argsTuple: [a: bigint | number, sourceApp: number | bigint, storageApp: number | bigint]
      returns: bigint
    }>
    & Record<'ms(uint64,application,application)void' | 'ms', {
      argsObj: {
        value: bigint | number
        sourceApp: number | bigint
        storageApp: number | bigint
      }
      argsTuple: [value: bigint | number, sourceApp: number | bigint, storageApp: number | bigint]
      returns: void
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'sourceApplication'?: IntegerState
      'storageApplication'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type ImmutableV4Sig = keyof ImmutableV4['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends ImmutableV4Sig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the ImmutableV4 smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends ImmutableV4Sig> = ImmutableV4['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the ImmutableV4 smart contract to the method's return type
 */
export type MethodReturn<TSignature extends ImmutableV4Sig> = ImmutableV4['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type ImmutableV4CreateCalls = (typeof ImmutableV4CallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type ImmutableV4CreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type ImmutableV4DeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: ImmutableV4CreateCalls) => ImmutableV4CreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class ImmutableV4CallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the ImmutableV4 smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the setSourceApplication(application)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static setSourceApplication(args: MethodArgs<'setSourceApplication(application)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'setSourceApplication(application)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.app],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the setStorageApplication(application)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static setStorageApplication(args: MethodArgs<'setStorageApplication(application)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'setStorageApplication(application)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.app],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the sum(uint64,uint64,application)uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static sum(args: MethodArgs<'sum(uint64,uint64,application)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'sum(uint64,uint64,application)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b, args.sourceApp],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the sumMR(uint64,application,application)uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static sumMr(args: MethodArgs<'sumMR(uint64,application,application)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'sumMR(uint64,application,application)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.sourceApp, args.storageApp],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the ms(uint64,application,application)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static ms(args: MethodArgs<'ms(uint64,application,application)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'ms(uint64,application,application)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.value, args.sourceApp, args.storageApp],
      ...params,
    }
  }
}

/**
 * A client to make calls to the ImmutableV4 smart contract
 */
export class ImmutableV4Client {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `ImmutableV4Client`
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
  public async call<TSignature extends keyof ImmutableV4['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the ImmutableV4 smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: ImmutableV4DeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(ImmutableV4CallFactory.create)
    return this.appClient.deploy({
      ...params,
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
       * Creates a new instance of the ImmutableV4 smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication()void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(ImmutableV4CallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the ImmutableV4 smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the setSourceApplication(application)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public setSourceApplication(args: MethodArgs<'setSourceApplication(application)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ImmutableV4CallFactory.setSourceApplication(args, params))
  }

  /**
   * Calls the setStorageApplication(application)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public setStorageApplication(args: MethodArgs<'setStorageApplication(application)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ImmutableV4CallFactory.setStorageApplication(args, params))
  }

  /**
   * Calls the sum(uint64,uint64,application)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public sum(args: MethodArgs<'sum(uint64,uint64,application)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ImmutableV4CallFactory.sum(args, params))
  }

  /**
   * Calls the sumMR(uint64,application,application)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public sumMr(args: MethodArgs<'sumMR(uint64,application,application)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ImmutableV4CallFactory.sumMr(args, params))
  }

  /**
   * Calls the ms(uint64,application,application)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public ms(args: MethodArgs<'ms(uint64,application,application)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ImmutableV4CallFactory.ms(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<ImmutableV4['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get sourceApplication() {
        return ImmutableV4Client.getIntegerState(state, 'sourceApplication')
      },
      get storageApplication() {
        return ImmutableV4Client.getIntegerState(state, 'storageApplication')
      },
    }
  }

  public compose(): ImmutableV4Composer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      setSourceApplication(args: MethodArgs<'setSourceApplication(application)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.setSourceApplication(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      setStorageApplication(args: MethodArgs<'setStorageApplication(application)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.setStorageApplication(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      sum(args: MethodArgs<'sum(uint64,uint64,application)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.sum(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      sumMr(args: MethodArgs<'sumMR(uint64,application,application)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.sumMr(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      ms(args: MethodArgs<'ms(uint64,application,application)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.ms(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
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
    } as unknown as ImmutableV4Composer
  }
}
export type ImmutableV4Composer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the setSourceApplication(application)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  setSourceApplication(args: MethodArgs<'setSourceApplication(application)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ImmutableV4Composer<[...TReturns, MethodReturn<'setSourceApplication(application)void'>]>

  /**
   * Calls the setStorageApplication(application)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  setStorageApplication(args: MethodArgs<'setStorageApplication(application)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ImmutableV4Composer<[...TReturns, MethodReturn<'setStorageApplication(application)void'>]>

  /**
   * Calls the sum(uint64,uint64,application)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  sum(args: MethodArgs<'sum(uint64,uint64,application)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ImmutableV4Composer<[...TReturns, MethodReturn<'sum(uint64,uint64,application)uint64'>]>

  /**
   * Calls the sumMR(uint64,application,application)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  sumMr(args: MethodArgs<'sumMR(uint64,application,application)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ImmutableV4Composer<[...TReturns, MethodReturn<'sumMR(uint64,application,application)uint64'>]>

  /**
   * Calls the ms(uint64,application,application)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  ms(args: MethodArgs<'ms(uint64,application,application)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ImmutableV4Composer<[...TReturns, MethodReturn<'ms(uint64,application,application)void'>]>

  /**
   * Makes a clear_state call to an existing instance of the ImmutableV4 smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): ImmutableV4Composer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): ImmutableV4Composer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<ImmutableV4ComposerResults<TReturns>>
}
export type ImmutableV4ComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
