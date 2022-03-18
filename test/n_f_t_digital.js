const NFTDigital = artifacts.require("NFTDigital");
const SimpleExchange = artifacts.require("ContExchange");
const BEP20FixedSupply = artifacts.require("BEP20FixedSupply");
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("NFTDigital", function ( accounts ) {
  /*it("should assert true", async function () {
    await NFTDigital.deployed();
    console.log(accounts);
    return assert.isTrue(true);
  });*/

  it("create NFT", async function () {
    nft = await NFTDigital.deployed()
    simpleExchange = await SimpleExchange.deployed()
    bep20 = await BEP20FixedSupply.deployed()

    nft.create("0x24b41165c110c5a8d10f4b51d4837337d79860fb", "Bill Nguyen")
    nft.approve(simpleExchange.address, 1)
    console.log( 'Balance1: '+ await web3.eth.getBalance(accounts[0]))
    console.log( 'Balance2: '+ await web3.eth.getBalance(accounts[1]))
    simpleExchange.sellToken(1, 100, { from: accounts[0] })
    simpleExchange.buyToken(1, { from: accounts[1] })
    console.log( 'Balance1: '+ await web3.eth.getBalance(accounts[0]))
    console.log( 'Balance2: '+ await web3.eth.getBalance(accounts[1]))
    
    //const contract = await new web3.eth.Contract(simpleExchange.abi, simpleExchange.address)
    
    //const gas = await contract.methods.buyToken(2).estimateGas({ from: accounts[0], gas: 5000000000 });
 
    return assert.isTrue(true);
  });

});
