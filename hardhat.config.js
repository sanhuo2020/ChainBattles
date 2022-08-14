require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const MUMBAI_URL = process.env.MUMBAI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYSCAN_API_KEY = process.env.POLYSCAN_API_KEY

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: MUMBAI_URL,
      accounts: [PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: POLYSCAN_API_KEY
  }
};
