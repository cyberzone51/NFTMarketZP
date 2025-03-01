import type { Chain } from "thirdweb";
import { avalancheFuji, polygonAmoy, sepolia, polygon } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x8C1D464B385A2B7EAa80dcAAD66DD8BC0256e717",
    chain: avalancheFuji,
  },
  {
    address: "0xBD9d5034223a2F65e39a32E55cb78Efd42224a55",
    chain: polygonAmoy,
  },
  {
    address: "0xe0eFD6fb388405b67b3E9FaFc02649c70E749f03",
    chain: sepolia,
  },
  {
    address: "0x00C7ffE4489F2261A6e000647E16510655Db7986",
    chain: polygon,
  },
];
