import { getTokenAddress, TOKENS } from '@okx-lido-sdk/constants';
import { useSDK } from './useSDK';

export const useTokenAddress = (token: TOKENS): string => {
  const { chainId } = useSDK();
  return getTokenAddress(chainId, token);
};
