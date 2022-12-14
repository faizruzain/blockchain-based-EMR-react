import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import medicalRecordsinstance from "../ethereum/instance-medical-records";
import web3 from "../ethereum/web3";

class PatientDetails extends Component {
  constructor() {
    super();
    this.state = { address: "" };
  }

  async componentDidMount() {
    const [, , , jenis, params] = window.location.pathname.split("/");
    this.setState({ address: params });

    const accounts = await web3.eth.getAccounts();

    if (jenis === "Rawat-Jalan") {
      const data = await medicalRecordsinstance.methods
        .getOutPatient(params)
        .call({
          from: accounts[0],
        });

      console.log(data);
    } else if (jenis === "Rawat-Inap") {
      const data = await medicalRecordsinstance.methods
        .getInPatient(params)
        .call({
          from: accounts[0],
        });

      console.log(data);
    } else if (jenis === "Gawat-Darurat") {
      const data = await medicalRecordsinstance.methods
        .getEmergencyPatient(params)
        .call({
          from: accounts[0],
        });

      console.log(data);
    }
  }

  render() {
    const { address } = this.state;
    return (
      <Container textAlign="center">
        <h1>Patient Details {address}</h1>
      </Container>
    );
  }
}

export default PatientDetails;
