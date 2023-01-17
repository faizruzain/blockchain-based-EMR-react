import { Component } from "react";
import {
  Container,
  Table,
} from "semantic-ui-react";
import axios from "axios";
import web3 from "../ethereum/web3";

class PatientRecords extends Component {
  state = {
    patientDetails: "",
    contenteditable: "false",
    disabled: true,
    transactionHash: "",
  };

  async componentDidMount() {
    const [address] = await web3.eth.getAccounts();
    console.log(address);
    const url = `https://skripsi-backend-service.onrender.com/get/patient/records?id=63c54e22a4a8cf503522d0e3&address=${address}`;
    axios
      .get(
        url
        // `http://localhost:5000/get/patient/records?id=63c3845b2261f918cc71eadf&address=0x71f07EE63b0B2db5a6F9ACC253E8D8Ff8653E17A`
      )
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        this.setState({ patientDetails: data });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("completed");
      });
  }

  render() {
    const { patientDetails, contenteditable } = this.state;

    return (
      <Container>
        <Table
          contenteditable={contenteditable}
          style={{ marginBottom: "20px" }}
          celled
          striped
          textAlign="left"
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="3">Patient Records</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>Patient ID</Table.Cell>
              <Table.Cell>{patientDetails._id}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Index</Table.Cell>
              <Table.Cell>{patientDetails.index}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Descriptions</Table.Cell>
              <Table.Cell>{patientDetails.description}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Medical Specialty</Table.Cell>
              <Table.Cell>{patientDetails.medical_specialty}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Diagnosis</Table.Cell>
              <Table.Cell>{patientDetails.sample_name}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Anamnesis</Table.Cell>
              <Table.Cell>{patientDetails.transcription}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Patient Address</Table.Cell>
              <Table.Cell>{patientDetails.address}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default PatientRecords;
