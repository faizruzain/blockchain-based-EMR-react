import { Component } from "react";
import { Container, Table, Button } from "semantic-ui-react";
import axios from "axios";

const address = window.ethereum.selectedAddress;

class PatientDataDetails extends Component {
  state = { patientDetails: "", contenteditable: "false" };

  componentDidMount() {
    const id = window.location.href.split("/");
    console.log(address);
    axios
      .get(
        `http://localhost:5000/get/patient/records?id=${id[5]}&address=${address}`
      )
      .then((res) => {
        const data = res.data.data;
        this.setState({ patientDetails: data });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("completed");
      });
  }

  editable = (e) => {
    console.log(e);
    this.setState({ contenteditable: "true" });
  };

  render() {
    const { patientDetails, contenteditable } = this.state;
    console.log(contenteditable);
    return (
      <Container>
        <Table
          contenteditable={contenteditable}
          style={{ marginBottom: "20px" }}
          celled
          striped
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                Patient Records
                <Button
                  onClick={this.editable}
                  style={{ marginBottom: "5px" }}
                  floated="right"
                  primary
                >
                  Edit Records
                </Button>

                <Button
                  onClick={this.editable}
                  style={{ marginBottom: "5px" }}
                  floated="right"
                  positive
                >
                  Edit Records
                </Button>
              </Table.HeaderCell>
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
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default PatientDataDetails;
