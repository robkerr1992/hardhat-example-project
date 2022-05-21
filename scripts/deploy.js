const { ethers } = require('hardhat');
require('dotenv').config();

const main = async () => {
    const ModifyVariable = await ethers.getContractFactory('ModifyVariable');
    const contract = await ModifyVariable.deploy(222, 'G Jones');

    await contract.deployed();

    console.log(contract.address);
    console.log(await contract.x());
    console.log(await contract.y());
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })