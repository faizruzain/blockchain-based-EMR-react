import { Component } from "react";
import {
  Menu,
  Grid,
  Image,
  Segment,
  Table,
  Container,
} from "semantic-ui-react";
import Content from "./content.component";
import patientImage from "../assets/patient.jpg";
import PatientRecords from "./patient-records.component";
import web3 from "../ethereum/web3";
import axios from "axios";

class PatientPage extends Component {
  state = {
    activeItem: "patientRecords",
    address: "",
    patientDetails: "",
    contenteditable: "false",
    disabled: true,
    transactionHash: "",
  };

  async componentDidMount() {
    const lastActiveItem = localStorage.getItem("lastActiveItem");
    this.setState({ activeItem: lastActiveItem });
    const [address] = await web3.eth.getAccounts();
    this.setState({ address: address });
    // const [address] = await web3.eth.getAccounts();
    const url = `https://skripsi-backend-service.onrender.com/get/patient/records?id=63c54e22a4a8cf503522d0e3&address=${address}`;
    axios
      .get(
        url
        // `http://localhost:5000/get/patient/records?id=63c3845b2261f918cc71eadf&address=0x71f07EE63b0B2db5a6F9ACC253E8D8Ff8653E17A`
      )
      .then((res) => {
        const data = res.data.data;
        console.log(res);
        this.setState({ patientDetails: data });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("completed");
      });
  }

  handleItemClick = (e, { name }) => {
    console.log(name);
    this.setState({ activeItem: name });
    localStorage.setItem("lastActiveItem", name);
  };

  render() {
    const { activeItem, patientDetails, contenteditable } = this.state;

    return (
      <Grid>
        <Grid.Column width={3}>
          <Menu size="large" compact vertical style={{ marginBottom: "370px" }}>
            <Menu.Item>
              <Image
                src={patientImage}
                size="medium"
                // circular
              />
              <p>Patient</p>
            </Menu.Item>

            {/* <Menu.Item
              name="bio"
              active={activeItem === "bio"}
              onClick={this.handleItemClick}
            >
              Bio
            </Menu.Item> */}

            <Menu.Item
              name="patientRecords"
              active={activeItem === "patientRecords"}
              onClick={this.handleItemClick}
            >
              My Records
            </Menu.Item>

            {/* <Menu.Item
              name="newPatient"
              active={activeItem === "newPatient"}
              onClick={this.handleItemClick}
            >
              New Patient
            </Menu.Item> */}

            {/* <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            >
              LogOut
            </Menu.Item> */}
          </Menu>
        </Grid.Column>

        <Grid.Column floated="right" stretched width={13}>
          <Segment>
            {/* <Content content={this.state.activeItem} /> */}
            {/* <PatientRecords address={address} /> */}
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

                  <Table.Row>
                    <Table.Cell collapsing>Patient Address</Table.Cell>
                    <Table.Cell>{patientDetails.address}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default PatientPage;
