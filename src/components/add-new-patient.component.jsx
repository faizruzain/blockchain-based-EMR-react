import { Component } from "react";
import { Container, Table, Button } from "semantic-ui-react";
import axios from "axios";
import web3 from "../ethereum/web3";

class AddNewPatient extends Component {
  state = {
    patientDetails: "",
    contenteditable: "false",
    disabled: true,
    transactionHash: "",
  };

  async componentDidMount() {
    const [address] = await web3.eth.getAccounts();
    console.log(address);
    const id = window.location.href.split("/");
    const url = `http://localhost:5000/get/patient/records?id=${id[5]}&address=${address}`;
    // axios
    //   .get(
    //     url
    //     // `http://localhost:5000/get/patient/records?id=63c3845b2261f918cc71eadf&address=0x71f07EE63b0B2db5a6F9ACC253E8D8Ff8653E17A`
    //   )
    //   .then((res) => {
    //     const data = res.data.data;
    //     this.setState({ patientDetails: data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     console.log("completed");
    //   });
  }

  editable = () => {
    this.setState({ contenteditable: "true", disabled: false });
  };

  cancelEdit = () => {
    this.setState({ contenteditable: "false", disabled: true });
  };

  saveRecords = async () => {
    const [address] = await web3.eth.getAccounts();
    let values = document
      .querySelector("table")
      .tBodies[0].querySelectorAll("td");

    let arr = [];
    values.forEach((value, i) => {
      if (i % 2 === 1) {
        arr.push(value.innerText);
      }
    });
    console.log(arr);

    const data = {
      _id: arr[0],
      description: arr[2],
      medical_specialty: arr[3],
      sample_name: arr[4],
      transcription: arr[5],
      address: address,
    };
    console.log(data);

    axios
      .post(`http://localhost:5000/add-new-record`, data)
      .then((res) => {
        const { newDoc } = res.data;
        const { transactionHash } = res.data;
        console.log(transactionHash);
        this.setState({
          patientDetails: newDoc,
          contenteditable: "false",
          transactionHash: transactionHash,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("saving...");
  };

  render() {
    const { patientDetails, contenteditable, disabled } = this.state;
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
              <Table.HeaderCell colSpan="3">
                Patient Records
                <Button.Group style={{ marginLeft: "5px" }} floated="right">
                  <Button onClick={this.cancelEdit} disabled={disabled}>
                    Cancel
                  </Button>
                  <Button.Or />
                  <Button
                    onClick={this.saveRecords}
                    positive
                    disabled={disabled}
                  >
                    Save Records
                  </Button>
                </Button.Group>
                {/* ================= */}
                <Button
                  onClick={this.editable}
                  style={{ marginBottom: "5px" }}
                  floated="right"
                  primary
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
              <Table.Cell></Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Medical Specialty</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Diagnosis</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Anamnesis</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default AddNewPatient;
