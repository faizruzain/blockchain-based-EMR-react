// deployment code here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const mnemonicPhrase = "hawk pair net flash already meat vanish angle width enrich imitate genuine"; 
let provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonicPhrase
  },
  providerOrUrl: "https://goerli.infura.io/v3/f22729a20ad0427ab1790343739a33f0"
});

const web3 = new Web3(provider);

const compiled_Contract_Deployer = require("./build/ContractDeployer.json");
// console.log(compiled_Contract_Deployer);

async function deploy() {
  const accounts = await web3.eth.getAccounts();
  
  const contractDeployer = await new web3.eth.Contract(compiled_Contract_Deployer.abi).deploy({
    data: compiled_Contract_Deployer.evm.bytecode.object
  }).send({
    from: accounts[0]
  })

  console.log(contractDeployer.options.address); // 0x4D686dD15A128890E4a211020b7130b2D6a0dFD0
}

deploy();