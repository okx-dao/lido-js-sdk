import { BaseContract } from '@ethersproject/contracts';
import { Provider } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import {
  AggregatorAbiFactory,
  Erc20AbiFactory,
  StethAbiFactory,
  WstethAbiFactory,
} from './factories';

interface Factory<C extends BaseContract> {
  connect(address: string, signerOrProvider: Signer | Provider): C;
}

const createContractGetter = <C extends BaseContract>(factory: Factory<C>) => {
  const providerCache = new WeakMap<Signer | Provider, Record<string, C>>();

  return (address: string, signerOrProvider: Signer | Provider): C => {
    let cacheByAddress = providerCache.get(signerOrProvider);
    let contract = cacheByAddress?.[address];

    if (!cacheByAddress) {
      cacheByAddress = {};
      providerCache.set(signerOrProvider, cacheByAddress);
    }

    if (!contract) {
      contract = factory.connect(address, signerOrProvider);
      cacheByAddress[address] = contract;
    }

    return contract;
  };
};

export const getAggregatorContract = createContractGetter(AggregatorAbiFactory);
export const getERC20Contract = createContractGetter(Erc20AbiFactory);
export const getSTETHContract = createContractGetter(StethAbiFactory);
export const getWSTETHContract = createContractGetter(WstethAbiFactory);