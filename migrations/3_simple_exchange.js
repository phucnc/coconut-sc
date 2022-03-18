// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");
const NFTDigital = artifacts.require("ConutNFT");
//const BEP20FixedSupply = artifacts.require("BEP20FixedSupply");
const ContExchange = artifacts.require("ConutExchange");

module.exports = function(deployer) {
  /*deployer.deploy(ConutExchange, ConutNFT.address,'0xd6b4a89e6c2c9a615a809927b66ba23f92335186', '0x2009975970C8C8b8eD05f3CdB65571C7d1f6aCFA')  test net */
  //deployer.deploy(ConutExchange, ConutNFT.address,'0xe9e7cea3dedca5984780bafc599bd69add087d56', '0xaf5759f6ec6138741854bb9f412794cb770ff6d4') //mainnet
   deployer.deploy(ConutExchange, ConutNFT.address,'0xd6b4a89e6c2c9a615a809927b66ba23f92335186', '0x04085647a69ba4b4101fef35fd60cd27d901fb55') //mainnet
};

//deployer.deploy(ConutExchange, ConutNFT.address, BUSD, CONUT)