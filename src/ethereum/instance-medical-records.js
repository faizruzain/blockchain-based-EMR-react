import web3 from "./web3.js";
import MedicalRecords from "./build/MedicalRecords.json";

const medicalRecordsinstance = new web3.eth.Contract(
  MedicalRecords.abi,
  "0x209A2ef01305B317A5130234Df8F8c3834B43DA7"
);

export default medicalRecordsinstance;

// ContractDeployer Address @ 0x236209b0F16f1C6156D2d12Ff2Ea444c61da9680
// {
//   MedicalRecords: '0x209A2ef01305B317A5130234Df8F8c3834B43DA7',
//   PatientVerificator: '0x6871CB59279dABb1812FD2Bf03d391A66af8A1a2',
//   DoctorVerificator: '0x48eAB36362d227d07B702d0272033ee00AA93318',
//   DoctorRelation: '0xF56575cF40B14ED144A17606F65783250e1e5dD4'
// }