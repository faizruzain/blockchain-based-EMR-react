import web3 from "./web3.js";
import DoctorRelation from "./build/DoctorRelation.json";

const doctorRelatioInstance = new web3.eth.Contract(
  DoctorRelation.abi,
  "0xb322EfeBcfAE4f533A779Ca107F46383CeeA76E7"
);

export default doctorRelatioInstance;

// ContractDeployer 0xb53cC7F3dFCea1F775624cDE1a2152f44e9c95Aa
