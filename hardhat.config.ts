import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { load } from 'ts-dotenv';


const env = load({
  RPC_URL: String,
  PRIVATE_KEY: String,
});

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: env.RPC_URL,
      accounts: [env.PRIVATE_KEY],
    },
  },
};

export default config;
