require('babel-register')


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
   development: {
      host: 'localhost',
      port: 8545,
      network_id: "*", // Match any network 
      gas: 3000000,
      gasLimit: 46000000
    }
  }
};
