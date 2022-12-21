jest.mock('node-fetch');

import fetch from 'node-fetch';
import { CHAINS } from '@okx-lido-sdk/constants';
import { fetchRPC } from '../src/fetchRPC';

const { Response } = jest.requireActual('node-fetch');
const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('fetchRPC', () => {
  const params = { method: 'POST' };
  const expected = 42;

  afterEach(() => {
    mockFetch.mockReset();
  });

  test('should throw if providers or urls are not passed', () => {
    expect(() => fetchRPC(CHAINS.Mainnet, {})).toThrowError();
  });

  test('should fetch correctly if providers are passed', async () => {
    const providers = { infura: 'API_KEY' };
    mockFetch.mockReturnValue(Promise.resolve(new Response(expected)));

    const response = await fetchRPC(CHAINS.Mainnet, { providers });
    const result = await response.json();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('infura'),
      params,
    );
    expect(result).toBe(expected);
  });

  test('should fetch correctly if urls are passed', async () => {
    const url = 'https://example.com';
    mockFetch.mockReturnValue(Promise.resolve(new Response(expected)));

    const response = await fetchRPC(CHAINS.Mainnet, { urls: [url] });
    const result = await response.json();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url, params);
    expect(result).toBe(expected);
  });

  test('should combine an url string correctly', async () => {
    const url = (chainId: CHAINS) => `https://example.com?chainId=${chainId}`;
    mockFetch.mockReturnValue(Promise.resolve(new Response(expected)));

    await fetchRPC(CHAINS.Mainnet, { urls: [url] });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url(CHAINS.Mainnet), params);
  });
});
