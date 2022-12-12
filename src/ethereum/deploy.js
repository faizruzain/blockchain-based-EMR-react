// deployment code here
const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545");

const compiled_Contract_Deployer = require("./build/ContractDeployer.json");
// console.log(compiled_Contract_Deployer);

async function deploy() {
  const accounts = await web3.eth.getAccounts();
  
  const contractDeployer = await new web3.eth.Contract(compiled_Contract_Deployer.abi).deploy({
    data: compiled_Contract_Deployer.evm.bytecode.object
  }).send({
    from: accounts[0],
    gas: "6000000"
  })

  console.log(contractDeployer.options.address);
}

deploy();

// ContractDeployer 0x7c09f9ec170834413b43134BB408eF24CBBa6be5

