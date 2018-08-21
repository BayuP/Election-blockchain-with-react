var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "size march toss seat apple aerobic crane machine twin punch keen remove";
module.exports = {
  networks :{
    development:{
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/36860d8edb154908ad0ac06944b999f4"),
      network_id: 3,
      gas: 470000,
    }
  }
};
