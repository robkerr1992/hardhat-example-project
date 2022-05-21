const { assert, expect } = require('chai');
const { ethers } = require('hardhat');

describe('Modify Variable', () => {
    it('should have an x and y', async function() {
        const ModifyVariable = await ethers.getContractFactory('ModifyVariable');
        const contract = await ModifyVariable.deploy(10, 'String Value');
        await contract.deployed();

        const x = await contract.x();
        const y = await contract.y();

        assert.equal(x.toNumber(), 10);
        assert.equal(y, 'String Value');
    })

    it('should change x to 1337', async function() {
        const ModifyVariable = await ethers.getContractFactory('ModifyVariable');
        const contract = await ModifyVariable.deploy(10, 'String Value');
        await contract.deployed();

        await contract.modifyToLeet();
        const leet = await contract.x();
        assert.equal(leet.toNumber(), 1337);
    })

    it('should change y to A Different String', async function() {
        const ModifyVariable = await ethers.getContractFactory('ModifyVariable');
        const contract = await ModifyVariable.deploy(10, 'String Value');
        await contract.deployed();

        await contract.modifyString('A Different String');
        const y = await contract.y();
        assert.equal(y, 'A Different String');
    })
})