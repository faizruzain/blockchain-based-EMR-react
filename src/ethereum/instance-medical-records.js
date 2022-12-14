import web3 from "./web3.js";
import MedicalRecords from "./build/MedicalRecords.json";

const medicalRecordsinstance = new web3.eth.Contract(
  MedicalRecords.abi,
  "0x61DCfaba7B0867F2eaE494bE2Db62Afe53425eec"
);

export default medicalRecordsinstance;

// ContractDeployer 0x3D79cdF5f8A570F442b11D4b938f010b8bc1A63D

// electronicMedicalRecords: '0x61DCfaba7B0867F2eaE494bE2Db62Afe53425eec',
// patientVerificator: '0x6162d5f8FDE9CCf50D944467D940E5b242cD1bCd',
// doctorVerificator: '0x0f19Efa838A00f739E50878fF616559fd4ecBbee',
// doctorRelation: '0x2165f7DDa17F5D13dd141F2448EeED221195494B'