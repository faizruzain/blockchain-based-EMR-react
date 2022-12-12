import web3 from "./web3.js";
import DoctorRelation from "./build/DoctorRelation.json";

const doctorRelatioInstance = new web3.eth.Contract(
  DoctorRelation.abi,
  "0xf38111a4BdA776447530fB8464e951AD1842Ff25"
);

export default doctorRelatioInstance;

// ContractDeployer 0x7c09f9ec170834413b43134BB408eF24CBBa6be5
