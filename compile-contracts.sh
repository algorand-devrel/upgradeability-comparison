#!/bin/zsh

tealscript contracts/calculator-proxy-v1.algo.ts contracts/artifacts
tealscript contracts/calculator-proxy-v2.algo.ts contracts/artifacts
tealscript contracts/immutable-v1.algo.ts contracts/artifacts
tealscript contracts/immutable-v2.algo.ts contracts/artifacts
tealscript contracts/immutable-v3.algo.ts contracts/artifacts
tealscript contracts/storage-v1.algo.ts contracts/artifacts

algokitgen generate -a contracts/artifacts/CalculatorProxyV1.json -o contracts/clients/CalculatorProxyV1Client.ts
algokitgen generate -a contracts/artifacts/CalculatorProxyV2.json -o contracts/clients/CalculatorProxyV2Client.ts
algokitgen generate -a contracts/artifacts/ImmutableV1.json -o contracts/clients/ImmutableV1Client.ts
algokitgen generate -a contracts/artifacts/ImmutableV2.json -o contracts/clients/ImmutableV2Client.ts
algokitgen generate -a contracts/artifacts/ImmutableV3.json -o contracts/clients/ImmutableV3Client.ts
algokitgen generate -a contracts/artifacts/StorageV1.json -o contracts/clients/StorageV1Client.ts
