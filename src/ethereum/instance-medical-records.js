import web3 from "./web3.js";
import MedicalRecords from "./build/MedicalRecords.json";

const medicalRecordsinstance = new web3.eth.Contract(
  MedicalRecords.abi,
  "0xbcBE3258Af6a0cd13bca431B0aC1b3964eAaCA53"
);

export default medicalRecordsinstance;

// ContractDeployer 0xC470B8f99E201c60A14e877DcdDF5c889E1FAF2D
