import web3 from "./web3.js";
import MedicalRecords from "./build/MedicalRecords.json";

const instance = new web3.eth.Contract(
  MedicalRecords.abi,
  "0x5B2591977e3d829449d6352F32c134517731890D"
);

export default instance;

// ContractDeployer 0x7c09f9ec170834413b43134BB408eF24CBBa6be5
