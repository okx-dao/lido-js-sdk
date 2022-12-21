import { CHAINS } from '@okx-lido-sdk/constants';
import {
  getRpcProvider,
  getRpcBatchProvider,
  getStaticRpcProvider,
  getStaticRpcBatchProvider,
} from '../src/providersRPC';

describe('getRpcProvider', () => {
  test('should return a provider instance', () => {
    const url = '/api/rpc';
    const provider = getRpcProvider(CHAINS.Mainnet, url);

    expect(provider).toBeInstanceOf(Object);
    expect(provider.connection.url).toBe(url);
  });

  test('should use cache if url and chain are the same', () => {
    const url = '/api/rpc';
    const providerFirst = getRpcProvider(CHAINS.Mainnet, url);
    const providerSecond = getRpcProvider(CHAINS.Mainnet, url);

    expect(providerFirst).toBe(providerSecond);
  });

  test('should be different if urls are different', () => {
    const providerFirst = getRpcProvider(CHAINS.Mainnet, '/foo-url');
    const providerSecond = getRpcProvider(CHAINS.Mainnet, '/bar-url');

    expect(providerFirst).not.toBe(providerSecond);
  });

  test('should be different if chains are different', () => {
    const url = '/api/rpc';
    const providerFirst = getRpcProvider(CHAINS.Mainnet, url);
    const providerSecond = getRpcProvider(CHAINS.Rinkeby, url);

    expect(providerFirst).not.toBe(providerSecond);
  });

  test('should use cache if seeds are the same', () => {
    const url = '/api/rpc';
    const providerFirst = getRpcProvider(CHAINS.Mainnet, url, 1);
    const providerSecond = getRpcProvider(CHAINS.Mainnet, url, 1);

    expect(providerFirst).toBe(providerSecond);
  });

  test('should be different if seeds are different', () => {
    const url = '/api/rpc';
    const providerFirst = getRpcProvider(CHAINS.Mainnet, url, 1);
    const providerSecond = getRpcProvider(CHAINS.Mainnet, url, 2);

    expect(providerFirst).not.toBe(providerSecond);
  });

  test('should use pollingInterval', () => {
    const url = '/api/rpc';
    const pollingInterval = 1000;
    const provider = getRpcProvider(CHAINS.Mainnet, url, 0, pollingInterval);

    expect(provider.pollingInterval).toBe(pollingInterval);
  });
});

describe('getRpcBatchProvider', () => {
  test('should return a provider instance', () => {
    const url = '/api/rpc';
    const provider = getRpcBatchProvider(CHAINS.Mainnet, url);

    expect(provider).toBeInstanceOf(Object);
    expect(provider.connection.url).toBe(url);
  });
});

describe('getStaticRpcProvider', () => {
  test('should return a provider instance', () => {
    const url = '/api/rpc';
    const provider = getStaticRpcProvider(CHAINS.Mainnet, url);

    expect(provider).toBeInstanceOf(Object);
    expect(provider.connection.url).toBe(url);
  });
});

describe('getStaticRpcBatchProvider', () => {
  test('should return a provider instance', () => {
    const url = '/api/rpc';
    const provider = getStaticRpcBatchProvider(CHAINS.Mainnet, url);

    expect(provider).toBeInstanceOf(Object);
    expect(provider.connection.url).toBe(url);
  });
});
