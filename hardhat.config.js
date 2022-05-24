require("@nomiclabs/hardhat-waffle");

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
  networks: {
    hardhat: {},
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/68a9c5e3cfd549edbb5d41ff0318073d',
      accounts: ['8a546dcce7c3fdf43e7aeb48f9b3de51ecea3f18acc3e50cdf2e15ac526a9d9c']
    }
  },
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200
      }
    },
  },
};