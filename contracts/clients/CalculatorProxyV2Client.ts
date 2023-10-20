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
    "setTargetApplication(application)void": {
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
        "targetApplication": {
          "type": "uint64",
          "key": "targetApplication"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 1
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNDcuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmQtZGV2cmVsL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCi8vIHNldFRhcmdldEFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uKXZvaWQKYWJpX3JvdXRlX3NldFRhcmdldEFwcGxpY2F0aW9uOgoJLy8gYXBwOiBhcHBsaWNhdGlvbgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJYnRvaQoJdHhuYXMgQXBwbGljYXRpb25zCgoJLy8gZXhlY3V0ZSBzZXRUYXJnZXRBcHBsaWNhdGlvbihhcHBsaWNhdGlvbil2b2lkCgljYWxsc3ViIHNldFRhcmdldEFwcGxpY2F0aW9uCglpbnQgMQoJcmV0dXJuCgpzZXRUYXJnZXRBcHBsaWNhdGlvbjoKCXByb3RvIDEgMAoKCS8vIGNvbnRyYWN0cy9jYWxjdWxhdG9yLXByb3h5LXYyLmFsZ28udHM6OAoJLy8gYXNzZXJ0KHRoaXMudHhuLnNlbmRlciA9PT0gdGhpcy5hcHAuY3JlYXRvcikKCXR4biBTZW5kZXIKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcENyZWF0b3IKCWFzc2VydAoJPT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9jYWxjdWxhdG9yLXByb3h5LXYyLmFsZ28udHM6OQoJLy8gdGhpcy50YXJnZXRBcHBsaWNhdGlvbi52YWx1ZSA9IGFwcAoJYnl0ZSAidGFyZ2V0QXBwbGljYXRpb24iCglmcmFtZV9kaWcgLTEgLy8gYXBwOiBhcHBsaWNhdGlvbgoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gc3VtKGFwcGxpY2F0aW9uLHVpbnQ2NCx1aW50NjQpdWludDY0Ci8vCi8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycwphYmlfcm91dGVfc3VtOgoJLy8gdGFyZ2V0QXBwOiBhcHBsaWNhdGlvbgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwoJYnRvaQoJdHhuYXMgQXBwbGljYXRpb25zCgoJLy8gYjogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglidG9pCgoJLy8gYTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBzdW0oYXBwbGljYXRpb24sdWludDY0LHVpbnQ2NCl1aW50NjQKCWNhbGxzdWIgc3VtCglpbnQgMQoJcmV0dXJuCgpzdW06Cglwcm90byAzIDAKCgkvLyBjb250cmFjdHMvY2FsY3VsYXRvci1wcm94eS12Mi5hbGdvLnRzOjE0CgkvLyByZXR1cm4gc2VuZE1ldGhvZENhbGw8W251bWJlciwgbnVtYmVyLCBBcHBsaWNhdGlvbl0sIHVpbnQ2ND4oewoJLy8gICAgICAgYXBwbGljYXRpb25JRDogdGhpcy50YXJnZXRBcHBsaWNhdGlvbi52YWx1ZSwKCS8vICAgICAgIG5hbWU6ICdzdW0nLAoJLy8gICAgICAgbWV0aG9kQXJnczogW2EsIGIsIHRoaXMuYXBwXSwKCS8vICAgICB9KTsKCWl0eG5fYmVnaW4KCWludCBhcHBsCglpdHhuX2ZpZWxkIFR5cGVFbnVtCgltZXRob2QgInN1bSh1aW50NjQsdWludDY0LGFwcGxpY2F0aW9uKXVpbnQ2NCIKCWl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCgoJLy8gY29udHJhY3RzL2NhbGN1bGF0b3ItcHJveHktdjIuYWxnby50czoxNQoJLy8gYXBwbGljYXRpb25JRDogdGhpcy50YXJnZXRBcHBsaWNhdGlvbi52YWx1ZQoJYnl0ZSAidGFyZ2V0QXBwbGljYXRpb24iCglhcHBfZ2xvYmFsX2dldAoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECgoJLy8gY29udHJhY3RzL2NhbGN1bGF0b3ItcHJveHktdjIuYWxnby50czoxNwoJLy8gbWV0aG9kQXJnczogW2EsIGIsIHRoaXMuYXBwXQoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NAoJaXRvYgoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKCWZyYW1lX2RpZyAtMiAvLyBiOiB1aW50NjQKCWl0b2IKCWl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9ucwoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMDEKCWl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCgoJLy8gRmVlIGZpZWxkIG5vdCBzZXQsIGRlZmF1bHRpbmcgdG8gMAoJaW50IDAKCWl0eG5fZmllbGQgRmVlCgoJLy8gU3VibWl0IGlubmVyIHRyYW5zYWN0aW9uCglpdHhuX3N1Ym1pdAoJaXR4biBOdW1Mb2dzCglpbnQgMQoJLQoJaXR4bmFzIExvZ3MKCWV4dHJhY3QgNCAwCglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCi8vIHN1bU1SKGFwcGxpY2F0aW9uLGFwcGxpY2F0aW9uLHVpbnQ2NCl1aW50NjQKYWJpX3JvdXRlX3N1bU1SOgoJLy8gc3RvcmFnZUFwcDogYXBwbGljYXRpb24KCXR4bmEgQXBwbGljYXRpb25BcmdzIDMKCWJ0b2kKCXR4bmFzIEFwcGxpY2F0aW9ucwoKCS8vIHRhcmdldEFwcDogYXBwbGljYXRpb24KCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWJ0b2kKCXR4bmFzIEFwcGxpY2F0aW9ucwoKCS8vIGE6IHVpbnQ2NAoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJYnRvaQoKCS8vIGV4ZWN1dGUgc3VtTVIoYXBwbGljYXRpb24sYXBwbGljYXRpb24sdWludDY0KXVpbnQ2NAoJY2FsbHN1YiBzdW1NUgoJaW50IDEKCXJldHVybgoKc3VtTVI6Cglwcm90byAzIDAKCgkvLyBjb250cmFjdHMvY2FsY3VsYXRvci1wcm94eS12Mi5hbGdvLnRzOjIyCgkvLyByZXR1cm4gc2VuZE1ldGhvZENhbGw8W251bWJlciwgQXBwbGljYXRpb24sIEFwcGxpY2F0aW9uXSwgdWludDY0Pih7CgkvLyAgICAgICBhcHBsaWNhdGlvbklEOiB0aGlzLnRhcmdldEFwcGxpY2F0aW9uLnZhbHVlLAoJLy8gICAgICAgbmFtZTogJ3N1bU1SJywKCS8vICAgICAgIG1ldGhvZEFyZ3M6IFthLCB0aGlzLmFwcCwgc3RvcmFnZUFwcF0sCgkvLyAgICAgfSk7CglpdHhuX2JlZ2luCglpbnQgYXBwbAoJaXR4bl9maWVsZCBUeXBlRW51bQoJbWV0aG9kICJzdW1NUih1aW50NjQsYXBwbGljYXRpb24sYXBwbGljYXRpb24pdWludDY0IgoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKCgkvLyBjb250cmFjdHMvY2FsY3VsYXRvci1wcm94eS12Mi5hbGdvLnRzOjIzCgkvLyBhcHBsaWNhdGlvbklEOiB0aGlzLnRhcmdldEFwcGxpY2F0aW9uLnZhbHVlCglieXRlICJ0YXJnZXRBcHBsaWNhdGlvbiIKCWFwcF9nbG9iYWxfZ2V0CglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uSUQKCgkvLyBjb250cmFjdHMvY2FsY3VsYXRvci1wcm94eS12Mi5hbGdvLnRzOjI1CgkvLyBtZXRob2RBcmdzOiBbYSwgdGhpcy5hcHAsIHN0b3JhZ2VBcHBdCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0CglpdG9iCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbnMKCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDAxCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwoJZnJhbWVfZGlnIC0zIC8vIHN0b3JhZ2VBcHA6IGFwcGxpY2F0aW9uCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9ucwoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMDIKCWl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCgoJLy8gRmVlIGZpZWxkIG5vdCBzZXQsIGRlZmF1bHRpbmcgdG8gMAoJaW50IDAKCWl0eG5fZmllbGQgRmVlCgoJLy8gU3VibWl0IGlubmVyIHRyYW5zYWN0aW9uCglpdHhuX3N1Ym1pdAoJaXR4biBOdW1Mb2dzCglpbnQgMQoJLQoJaXR4bmFzIExvZ3MKCWV4dHJhY3QgNCAwCglidG9pCglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCi8vIG1zKGFwcGxpY2F0aW9uLGFwcGxpY2F0aW9uLHVpbnQ2NCl2b2lkCmFiaV9yb3V0ZV9tczoKCS8vIHN0b3JhZ2VBcHA6IGFwcGxpY2F0aW9uCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAzCglidG9pCgl0eG5hcyBBcHBsaWNhdGlvbnMKCgkvLyB0YXJnZXRBcHA6IGFwcGxpY2F0aW9uCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglidG9pCgl0eG5hcyBBcHBsaWNhdGlvbnMKCgkvLyB2YWx1ZTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBtcyhhcHBsaWNhdGlvbixhcHBsaWNhdGlvbix1aW50NjQpdm9pZAoJY2FsbHN1YiBtcwoJaW50IDEKCXJldHVybgoKbXM6Cglwcm90byAzIDAKCgkvLyBjb250cmFjdHMvY2FsY3VsYXRvci1wcm94eS12Mi5hbGdvLnRzOjMwCgkvLyBzZW5kTWV0aG9kQ2FsbDxbbnVtYmVyLCBBcHBsaWNhdGlvbiwgQXBwbGljYXRpb25dLCB2b2lkPih7CgkvLyAgICAgICBhcHBsaWNhdGlvbklEOiB0aGlzLnRhcmdldEFwcGxpY2F0aW9uLnZhbHVlLAoJLy8gICAgICAgbmFtZTogJ21zJywKCS8vICAgICAgIG1ldGhvZEFyZ3M6IFt2YWx1ZSwgdGhpcy5hcHAsIHN0b3JhZ2VBcHBdLAoJLy8gICAgIH0pCglpdHhuX2JlZ2luCglpbnQgYXBwbAoJaXR4bl9maWVsZCBUeXBlRW51bQoJbWV0aG9kICJtcyh1aW50NjQsYXBwbGljYXRpb24sYXBwbGljYXRpb24pdm9pZCIKCWl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCgoJLy8gY29udHJhY3RzL2NhbGN1bGF0b3ItcHJveHktdjIuYWxnby50czozMQoJLy8gYXBwbGljYXRpb25JRDogdGhpcy50YXJnZXRBcHBsaWNhdGlvbi52YWx1ZQoJYnl0ZSAidGFyZ2V0QXBwbGljYXRpb24iCglhcHBfZ2xvYmFsX2dldAoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbklECgoJLy8gY29udHJhY3RzL2NhbGN1bGF0b3ItcHJveHktdjIuYWxnby50czozMwoJLy8gbWV0aG9kQXJnczogW3ZhbHVlLCB0aGlzLmFwcCwgc3RvcmFnZUFwcF0KCWZyYW1lX2RpZyAtMSAvLyB2YWx1ZTogdWludDY0CglpdG9iCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbnMKCWJ5dGUgMHgwMDAwMDAwMDAwMDAwMDAxCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwoJZnJhbWVfZGlnIC0zIC8vIHN0b3JhZ2VBcHA6IGFwcGxpY2F0aW9uCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9ucwoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMDIKCWl0eG5fZmllbGQgQXBwbGljYXRpb25BcmdzCgoJLy8gRmVlIGZpZWxkIG5vdCBzZXQsIGRlZmF1bHRpbmcgdG8gMAoJaW50IDAKCWl0eG5fZmllbGQgRmVlCgoJLy8gU3VibWl0IGlubmVyIHRyYW5zYWN0aW9uCglpdHhuX3N1Ym1pdAoJcmV0c3ViCgphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CglpbnQgMQoJcmV0dXJuCgpjcmVhdGVfTm9PcDoKCW1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCWVycgoKY2FsbF9Ob09wOgoJbWV0aG9kICJzZXRUYXJnZXRBcHBsaWNhdGlvbihhcHBsaWNhdGlvbil2b2lkIgoJbWV0aG9kICJzdW0odWludDY0LHVpbnQ2NCxhcHBsaWNhdGlvbil1aW50NjQiCgltZXRob2QgInN1bU1SKHVpbnQ2NCxhcHBsaWNhdGlvbixhcHBsaWNhdGlvbil1aW50NjQiCgltZXRob2QgIm1zKHVpbnQ2NCxhcHBsaWNhdGlvbixhcHBsaWNhdGlvbil2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX3NldFRhcmdldEFwcGxpY2F0aW9uIGFiaV9yb3V0ZV9zdW0gYWJpX3JvdXRlX3N1bU1SIGFiaV9yb3V0ZV9tcwoJZXJy",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDkKaW50IDE="
  },
  "contract": {
    "name": "CalculatorProxyV2",
    "desc": "",
    "methods": [
      {
        "name": "setTargetApplication",
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
            "name": "targetApp",
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
            "name": "targetApp",
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
            "name": "targetApp",
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
 * Defines the types of available calls and state of the CalculatorProxyV2 smart contract.
 */
export type CalculatorProxyV2 = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'setTargetApplication(application)void' | 'setTargetApplication', {
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
        targetApp: number | bigint
      }
      argsTuple: [a: bigint | number, b: bigint | number, targetApp: number | bigint]
      returns: bigint
    }>
    & Record<'sumMR(uint64,application,application)uint64' | 'sumMR', {
      argsObj: {
        a: bigint | number
        targetApp: number | bigint
        storageApp: number | bigint
      }
      argsTuple: [a: bigint | number, targetApp: number | bigint, storageApp: number | bigint]
      returns: bigint
    }>
    & Record<'ms(uint64,application,application)void' | 'ms', {
      argsObj: {
        value: bigint | number
        targetApp: number | bigint
        storageApp: number | bigint
      }
      argsTuple: [value: bigint | number, targetApp: number | bigint, storageApp: number | bigint]
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
      'targetApplication'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type CalculatorProxyV2Sig = keyof CalculatorProxyV2['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends CalculatorProxyV2Sig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the CalculatorProxyV2 smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends CalculatorProxyV2Sig> = CalculatorProxyV2['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the CalculatorProxyV2 smart contract to the method's return type
 */
export type MethodReturn<TSignature extends CalculatorProxyV2Sig> = CalculatorProxyV2['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type CalculatorProxyV2CreateCalls = (typeof CalculatorProxyV2CallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type CalculatorProxyV2CreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type CalculatorProxyV2DeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: CalculatorProxyV2CreateCalls) => CalculatorProxyV2CreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class CalculatorProxyV2CallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the CalculatorProxyV2 smart contract using the createApplication()void ABI method
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
   * Constructs a no op call for the setTargetApplication(application)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static setTargetApplication(args: MethodArgs<'setTargetApplication(application)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'setTargetApplication(application)void' as const,
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
      methodArgs: Array.isArray(args) ? args : [args.a, args.b, args.targetApp],
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
      methodArgs: Array.isArray(args) ? args : [args.a, args.targetApp, args.storageApp],
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
      methodArgs: Array.isArray(args) ? args : [args.value, args.targetApp, args.storageApp],
      ...params,
    }
  }
}

/**
 * A client to make calls to the CalculatorProxyV2 smart contract
 */
export class CalculatorProxyV2Client {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `CalculatorProxyV2Client`
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
  public async call<TSignature extends keyof CalculatorProxyV2['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the CalculatorProxyV2 smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: CalculatorProxyV2DeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(CalculatorProxyV2CallFactory.create)
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
       * Creates a new instance of the CalculatorProxyV2 smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication()void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(CalculatorProxyV2CallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the CalculatorProxyV2 smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the setTargetApplication(application)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public setTargetApplication(args: MethodArgs<'setTargetApplication(application)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CalculatorProxyV2CallFactory.setTargetApplication(args, params))
  }

  /**
   * Calls the sum(uint64,uint64,application)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public sum(args: MethodArgs<'sum(uint64,uint64,application)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CalculatorProxyV2CallFactory.sum(args, params))
  }

  /**
   * Calls the sumMR(uint64,application,application)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public sumMr(args: MethodArgs<'sumMR(uint64,application,application)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CalculatorProxyV2CallFactory.sumMr(args, params))
  }

  /**
   * Calls the ms(uint64,application,application)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public ms(args: MethodArgs<'ms(uint64,application,application)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CalculatorProxyV2CallFactory.ms(args, params))
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
  public async getGlobalState(): Promise<CalculatorProxyV2['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get targetApplication() {
        return CalculatorProxyV2Client.getIntegerState(state, 'targetApplication')
      },
    }
  }

  public compose(): CalculatorProxyV2Composer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      setTargetApplication(args: MethodArgs<'setTargetApplication(application)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.setTargetApplication(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
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
    } as unknown as CalculatorProxyV2Composer
  }
}
export type CalculatorProxyV2Composer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the setTargetApplication(application)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  setTargetApplication(args: MethodArgs<'setTargetApplication(application)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): CalculatorProxyV2Composer<[...TReturns, MethodReturn<'setTargetApplication(application)void'>]>

  /**
   * Calls the sum(uint64,uint64,application)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  sum(args: MethodArgs<'sum(uint64,uint64,application)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): CalculatorProxyV2Composer<[...TReturns, MethodReturn<'sum(uint64,uint64,application)uint64'>]>

  /**
   * Calls the sumMR(uint64,application,application)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  sumMr(args: MethodArgs<'sumMR(uint64,application,application)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): CalculatorProxyV2Composer<[...TReturns, MethodReturn<'sumMR(uint64,application,application)uint64'>]>

  /**
   * Calls the ms(uint64,application,application)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  ms(args: MethodArgs<'ms(uint64,application,application)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): CalculatorProxyV2Composer<[...TReturns, MethodReturn<'ms(uint64,application,application)void'>]>

  /**
   * Makes a clear_state call to an existing instance of the CalculatorProxyV2 smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): CalculatorProxyV2Composer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): CalculatorProxyV2Composer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<CalculatorProxyV2ComposerResults<TReturns>>
}
export type CalculatorProxyV2ComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
