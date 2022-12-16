import web3 from "./web3.js";
import MedicalRecords from "./build/MedicalRecords.json";

const medicalRecordsinstance = new web3.eth.Contract(
  MedicalRecords.abi,
  "0xE052379B649F56B2d87947e9b564E415942e3cD9"
);

export default medicalRecordsinstance;

// ContractDeployer Address @ 0x08663D3ff9ADFeFDD9f78B7aFFf5138e4c79780a
// {
//   MedicalRecords: '0xE052379B649F56B2d87947e9b564E415942e3cD9',
//   PatientVerificator: '0x6c40078E6b72a6F84b06dd8c4F21A9b1eCb39cB5',
//   DoctorVerificator: '0x59bD0e83C46ae51e495FA01cb1B6D53E93742156',
//   DoctorRelation: '0xa6Ca968eDed0878F89AE4ceBb2685a5b9723bC90'
// }