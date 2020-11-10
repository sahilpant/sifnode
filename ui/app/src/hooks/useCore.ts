import {
  createStore,
  createApi,
  createActions,
  getWeb3Provider,
  getFakeTokens,
  Coin,
  Network,
} from "../../../core";

// import tokens from "../../../core/data/topErc20Tokens.json";

const api = createApi({
  // TODO: switch on env
  sifAddrPrefix: "sif",
  sifApiUrl: "http://127.0.0.1:1317",
  getWeb3Provider,
  nativeAsset: Coin({
    name: "Rowan",
    symbol: "rwn",
    decimals: 18,
    network: Network.SIFCHAIN,
  }),
  loadAssets: getFakeTokens,
});

const store = createStore();
const actions = createActions({ store, api });

export function useCore() {
  return {
    store,
    api,
    actions,
  };
}
