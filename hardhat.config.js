require("@nomicfoundation/hardhat-toolbox");
require('hardhat-spdx-license-identifier');

// Change private keys accordingly - ONLY FOR DEMONSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
const privateKeyDev = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

module.exports = {
  defaultNetwork: 'hardhat',
  
  networks: {
    hardhat: {
      accounts: [{ privateKey: privateKeyDev, balance: '1000000000000000000000' }],
      networkId: 1337,
      chainId: 1337,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.23',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};
