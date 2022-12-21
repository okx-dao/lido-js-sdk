import invariant from 'tiny-invariant';
import { CHAINS } from './chains';

export enum TOKENS {
  WSTETH = 'WSTETH',
  STETH = 'STETH',
  LDO = 'LDO',
}

export const TOKENS_BY_NETWORK: {
  [key in CHAINS]?: { [key in TOKENS]?: string };
} = {
  [CHAINS.Mainnet]: {
    [TOKENS.WSTETH]: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
    [TOKENS.STETH]: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    [TOKENS.LDO]: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
  },
  [CHAINS.Ropsten]: {
    [TOKENS.STETH]: '0xd40EefCFaB888C9159a61221def03bF77773FC19',
  },
  [CHAINS.Rinkeby]: {
    [TOKENS.WSTETH]: '0x2Ca788280fB10384946D3ECC838D94DeCa505CF4',
    [TOKENS.STETH]: '0xbA453033d328bFdd7799a4643611b616D80ddd97',
    [TOKENS.LDO]: '0xbfcb02cf3df4f36ab8185469834e0e00a5fc6053',
  },
  [CHAINS.Goerli]: {
    [TOKENS.WSTETH]: '0x209619729b5D98CCF60cEcE77feb55916D6004c0',
    [TOKENS.STETH]: '0xc115dfc2393dCaD8E2528687D30585810240dBA0',
    [TOKENS.LDO]: '0x945392276eac66bb02855fa195a4c35d849b0100',
  },
};

export const getTokenAddress = (chainId: CHAINS, token: TOKENS): string => {
  const tokens = TOKENS_BY_NETWORK[chainId];
  invariant(tokens != null, 'Chain is not supported');

  const address = tokens[token];
  invariant(address != null, 'Token is not supported');

  return address;
};
