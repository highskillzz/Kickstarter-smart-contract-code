const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("Web3");
const campaignFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "guitar scrub bar divert oblige trouble vacuum sport bubble federal peasant balcony",
  "https://rinkeby.infura.io/YTwWVaCH0Dy4QHOqk2Bk"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy contract from ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(campaignFactory.interface))
    .deploy({ data: campaignFactory.bytecode})
    .send({from:accounts[0],gas:"5000000"})

  console.log("Contract deployed to ", result.options.address);
    
};

deploy();


/* Attempting to deploy contract from  0xC6bF70Aa714E11aEd4eD3ACb3D089753A9fBA427
Contract deployed to  0x6B7Fc411306602293e76eD9181926B6Dea2Eb749 */