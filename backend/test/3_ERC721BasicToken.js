var ERC721BasicToken = artifacts.require("./ERC721BasicToken.sol");
const fs = require('fs');
//const truffleAssert = require('truffle-assertions');
var ThrowProxy = artifacts.require("ThrowProxy.sol");

contract('ERC721BasicToken', async (accounts) => {

    it("ERC721BasicToken: balance init to 0", async () => {
        let instance = await ERC721BasicToken.deployed();
        fs.writeFileSync('./test/output.address', instance.address);
        var i;
        for (i = 0; i < 10; i++){
            let currentBalance = await instance.balanceOf(accounts[0]);
            assert.equal(currentBalance.valueOf(), 0, `${currentBalance} instead of 0`);
        }
    });

    it("ERC721BasicToken: balance input cannot be null", async () => {
        let instance = await ERC721BasicToken.deployed();
        let throwProxy = await ThrowProxy.deployed();

        throwProxy.setTarget(instance.address);

        //prime the proxy.
        ERC721BasicToken(throwProxy.address).balanceOf(0);
        //execute the call that is supposed to throw.
        //r will be false if it threw. r will be true if it didn't.
        //make sure you send enough gas for your contract method.
        var r = throwProxy.execute.gas(200000)();
    
        Assert.isFalse(r, 'Should be false, as it should throw');
    });


    
});

