// deployment code here
const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:8545");

const compiled_Medical_Records = require("./build/MedicalRecords.json");
const compiled_Doctor_Verificator = require("./build/DoctorVerificator.json");
const compiled_Patient_Verificator = require("./build/PatientVerificator.json");
const compiled_Doctor_Relation = require("./build/DoctorRelation.json");

async function deploy() {
  const [admin] = await web3.eth.getAccounts();

  // MedicalRecords Contract
  await new web3.eth.Contract(compiled_Medical_Records.abi)
    .deploy({
      data: compiled_Medical_Records.evm.bytecode.object,
      arguments: [admin],
    })
    .send({
      from: admin,
      gas: "8000000",
    })
    .on("error", (error) => {
      console.log(error);
    })
    .on("receipt", (receipt) => {
      console.log("Medical_Records");
      console.log(receipt);
      console.log("\n");
    });

  // DoctorVerificator Contract
  await new web3.eth.Contract(compiled_Doctor_Verificator.abi)
    .deploy({
      data: compiled_Doctor_Verificator.evm.bytecode.object,
      arguments: [admin],
    })
    .send({
      from: admin,
      gas: "8000000",
    })
    .on("error", (error) => {
      console.log(error);
    })
    .on("receipt", (receipt) => {
      console.log("Doctor_Verificator");
      console.log(receipt);
      console.log("\n");
    });

  // Patient_Verificator Contract
  await new web3.eth.Contract(compiled_Patient_Verificator.abi)
    .deploy({
      data: compiled_Patient_Verificator.evm.bytecode.object,
      arguments: [admin],
    })
    .send({
      from: admin,
      gas: "8000000",
    })
    .on("error", (error) => {
      console.log(error);
    })
    .on("receipt", (receipt) => {
      console.log("Patient_Verificator");
      console.log(receipt);
      console.log("\n");
    });

  // Doctor_Relation Contract
  await new web3.eth.Contract(compiled_Doctor_Relation.abi)
    .deploy({
      data: compiled_Doctor_Relation.evm.bytecode.object,
      arguments: [admin],
    })
    .send({
      from: admin,
      gas: "8000000",
    })
    .on("error", (error) => {
      console.log(error);
    })
    .on("receipt", (receipt) => {
      console.log("Doctor_Relation");
      console.log(receipt);
    });
}

deploy();
