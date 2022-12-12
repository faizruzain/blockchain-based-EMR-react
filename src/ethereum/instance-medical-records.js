import web3 from "./web3.js";
import MedicalRecords from "./build/MedicalRecords.json";

const instance = new web3.eth.Contract(
  MedicalRecords.abi,
  "0xB15C61e9847C3A6DD1396dB157c2c2a340b65f60"
);

export default instance;

// ContractDeployer 0xb53cC7F3dFCea1F775624cDE1a2152f44e9c95Aa
