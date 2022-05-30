require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY || "";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.13",

  networks: {
    goerli: {
      url: process.env.ALCHEMY_API_KEY,
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      chainId: 5,
      // accounts: [`0x${privateKey}`],
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      // accounts: ['0b0d2c36a3d6dc512900321213446587ba72b894b7701dc508b11c417d7a3dd5'],
    },
  },
};
