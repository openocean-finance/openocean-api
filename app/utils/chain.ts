export const getRpcUrlByChainId = (chainId: string) => {
  return {
    1: 'https://main-light.eth.linkpool.io/',
    56: 'https://bsc-dataseed.binance.org/',
    66: 'https://exchainrpc.okex.org',
    100: 'https://rpc.xdaichain.com/',
    128: 'https://http-mainnet-node.huobichain.com',
    137: 'https://rpc-mainnet.matic.network',
    250: 'https://rpc.ftm.tools',
    43114: 'https://api.avax.network/ext/bc/C/rpc',
  }[chainId];
};


export const isNativeToken = (token: string) => {
  return [
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    '0x0000000000000000000000000000000000001010',
    '0x0000000000000000000000000000000000000000',
    '',
    '',
  ].indexOf(token.toLowerCase()) >= 0;
};

export const getIdsByChainId = (chainId: string):any => {
  return {
    1: 'ethereum',
    56: 'binancecoin',
    66: 'okexchain',
    137: 'matic-network',
    250: 'fantom',
    128: 'huobi-token',
    // xdai: 'wrapped-xda',
    43114: 'wrapped-avax',
  }[chainId];
};

export const getPlatByChainId = (chainId: string):any => {
  return {
    1: 'ethereum',
    56: 'binance-smart-chain',
    66: 'okex-chain',
    128: 'huobi-token',
    137: 'polygon-pos',
    43114: 'avalanche',
    // ont: 'ontology',
    // harmony: 'harmony',
    // dot: 'polkadot'

  }[chainId];
};

export const getChainByChainId = (chainId: string):any => {
  return {
    1: 'eth',
    56: 'bsc',
    66: 'okex',
    // 100: 'xdai',
    128: 'heco',
    137: 'polygon',
    250: 'fantom',
    43114: 'avax',
    ont: 'ont',
    tron: 'tron',
    solana: 'solana',
  }[chainId];
};

