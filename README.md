# Lido JS SDK

JS SDK for Lido Finance projects.

## Packages

- [@okx-lido-sdk/constants](/packages/constants/README.md). Chain ids, Lido tokens
- [@okx-lido-sdk/contracts](/packages/contracts/README.md). Typed contracts for Lido tokens, ERC20 contract factory
- [@okx-lido-sdk/fetch](/packages/fetch/README.md). Ethereum data fetcher with fallbacks
- [@okx-lido-sdk/helpers](/packages/helpers/README.md)
- [@okx-lido-sdk/providers](/packages/providers/README.md). RPC provider getters with cache
- [@okx-lido-sdk/react](/packages/react/README.md). React hooks and providers. SSR ready
- [@okx-lido-sdk/web3-react](/packages/web3-react/README.md). Wrapped [web3-react](https://github.com/NoahZinsmeister/web3-react) provider

## Install

1. `yarn && yarn postinstall`
2. `yarn build`

## Usage

- `yarn build` — Build all packages
- `yarn lint` — Run eslint across packages
- `yarn test` — Run tests across packages
- `yarn test:watch` — Run tests in watch mode
- `yarn typechain` — Generate types
