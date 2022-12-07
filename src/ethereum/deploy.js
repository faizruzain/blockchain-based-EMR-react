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

  // console.log(contractDeployer);
}

deploy();

// ContractDeployer 0x0c584513EEE9F23281AE4Ec4cA64A31c02559DF2
// patient,0x745C3D67f2396b74cd82BCB21896dc969032008b,patientVerificator,0x98936C828918b11ab056D0543C69B18792554377,doctorVerificator,0x913C9Fad9808F4141E150a69154b221F54b2BD10,doctorRelation,0x8A1f3637b7d3528Fd36Dc858DF0D1E4C2D5Ace26

