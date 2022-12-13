import web3 from "./web3.js";
import DoctorRelation from "./build/DoctorRelation.json";

const doctorRelatioInstance = new web3.eth.Contract(
  DoctorRelation.abi,
  "0x4Dee93F0D99075c76a5EcFd3Db08be94d325B4f4"
);

export default doctorRelatioInstance;

// ContractDeployer 0xC470B8f99E201c60A14e877DcdDF5c889E1FAF2D
