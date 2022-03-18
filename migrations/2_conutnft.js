// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
//const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");
const ConutNFT = artifacts.require("ConutNFT");
//const BEP20FixedSupply = artifacts.require("BEP20FixedSupply");
//const ContExchange = artifacts.require("ContExchange");

module.exports = function(deployer) {
 // deployer.deploy(ERC721PresetMinterPauserAutoId, "My NFT","NFT", "http://my-json-server.typicode.com/huangsuyu/nft/tokens");
  deployer.deploy(ConutNFT)
  //deployer.deploy(BEP20FixedSupply)
};