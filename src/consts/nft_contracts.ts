import type { Chain } from "thirdweb";
import { avalancheFuji, polygonAmoy } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x6b869a0cF84147f05a447636c42b8E53De65714E",
    chain: avalancheFuji,
    title: "Steakhouse: Liberatorz",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeigonh3hde5suwcb3qvkh6ljtvxv7ubfmcqbwfvi3ihoi3igd27jwe/SteakhouseLogo.svg",
    type: "ERC721",
  },
  {
    address: "0xC5A2c72c581eA4A17e17bEeF38a9597132830401",
    chain: avalancheFuji,
    title: "Ugly Waifu",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeidaadqapi7twzd7pjp24tu4ngsr3teubrhop7hg3jk3oj6lqysfgm/OS-LOGO.png",
    slug: "ugly-waifu",
    type: "ERC721",
  },

  {
    address: "0x0896Db00D8987Fba2152aa7c14c4255eBC7354cE",
    chain: avalancheFuji,
    title: "Unnamed Collection",
    description: "",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/Qmct2vS78Uwug3zVtqQognskPPRmd4wRQiaDAQWt1kRJws/0.png",
    slug: "unnamed-collection",
    type: "ERC721",
  },
  {
    address: "0x0ACaCa3d3F64bb6e6D3564BBc891c58Bd4A4c83c",
    chain: avalancheFuji,
    title: "GoroBot",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeiay3ffxy3os56bvnu5cmq7gids4v6n4hf5nvvcb3gy2dzavi3ltnu/profile.jpg",
    slug: "gorobot",
    type: "ERC721",
  },
  {
    address: "0x87f2eAc3687D0AA609bEfE3Ed4bF9d58E79360a6",
    chain: polygonAmoy,
    title: "GORGI",
    thumbnailUrl:
      "https://gateway.pinata.cloud/ipfs/QmSkqKRXoB7LtGUDGM3PXYxGekHjywZ3RNmoVkALyBy4NZ/myFile.png",
    type: "ERC721",
  },
  {
    address: "0xb0D8108079662a3336656efac0Acd75ca3e5EeEC",
    chain: polygonAmoy,
    title: "Zombie Punks",
    thumbnailUrl:
       "https://gateway.pinata.cloud/ipfs/QmcndoEPdyPFxksa27ZmZ8Sb1tMPUWfJCAnUHsEc51aiYQ/posterzp.gif",
    type: "ERC721",
  },
];
