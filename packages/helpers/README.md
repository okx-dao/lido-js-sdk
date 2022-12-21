# Helpers

Helpers for Lido Finance projects.
Part of [Lido JS SDK](https://github.com/okx-dao/lido-js-sdk/#readme)

- [Install](#install)
- [Etherscan](#etherscan)
  - [getEtherscanTxLink](#getetherscantxlink)
  - [getEtherscanTokenLink](#getetherscantokenlink)
  - [getEtherscanAddressLink](#getetherscanaddresslink)
- [Open window](#open-window)

## Install

```bash
yarn add @okx-lido-sdk/helpers
```

## Etherscan

A set of functions for generating links to [etherscan](https://etherscan.io/)

### getEtherscanTxLink

```ts
import { getEtherscanTxLink } from '@okx-lido-sdk/helpers';
import { CHAINS } from '@okx-lido-sdk/constants';

const link = getEtherscanTxLink(
  CHAINS.Mainnet,
  '0x0000000000000000000000000000000000000000000000000000000000000000',
);
console.log(link); // https://etherscan.io/tx/0x0000000000000000000000000000000000000000000000000000000000000000
```

### getEtherscanTokenLink

```ts
import { getEtherscanTokenLink } from '@okx-lido-sdk/helpers';
import { CHAINS } from '@okx-lido-sdk/constants';

const link = getEtherscanTokenLink(
  CHAINS.Mainnet,
  '0x0000000000000000000000000000000000000000',
);
console.log(link); // https://etherscan.io/address/0x0000000000000000000000000000000000000000
```

### getEtherscanAddressLink

```ts
import { getEtherscanAddressLink } from '@okx-lido-sdk/helpers';
import { CHAINS } from '@okx-lido-sdk/constants';

const link = getEtherscanAddressLink(
  CHAINS.Mainnet,
  '0x0000000000000000000000000000000000000000',
);
console.log(link); // https://etherscan.io/address/0x0000000000000000000000000000000000000000
```

## Open window

```ts
import { openWindow } from '@okx-lido-sdk/helpers';

openWindow('https://lido.fi');
```
