const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
    
    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    console.log(`Starting with ${ waveCount } waves recorded...`);

    let waveTxn = await waveContract.wave( "Test Message" );
    await waveTxn.wait();

    waveTxn = await waveContract.connect(randomPerson).wave( "Text Message from Random User" );
  
    waveCount = await waveContract.getTotalWaves();

    console.log(`Finishing with ${ waveCount } waves...`);

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
};
  
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    };
};
  
runMain();
