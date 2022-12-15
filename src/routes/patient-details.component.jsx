import React, { Component } from "react";
import { Container, Table, Card, Icon, Image, Grid } from "semantic-ui-react";
import medicalRecordsinstance from "../ethereum/instance-medical-records";
import web3 from "../ethereum/web3";

class PatientDetails extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      rawatJalan: {
        patientDetails: {},
        records: [],
      },
      rawatInap: {},
      gawatDarurat: {},
    };
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

      const { patientDetails, records } = this.state.rawatJalan;

      patientDetails.patientAddress = data[0]["patientAddress"];
      patientDetails.nama_lengkap = data[0]["nama_lengkap"];
      patientDetails.umur = data[0]["umur"];
      patientDetails.tanggal_lahir = data[0]["tanggal_lahir"];
      patientDetails.gender = data[0]["gender"];

      this.setState({ patientDetails });

      const { a, b } = data;

      for (const key in b) {
        const obj = {};
        for (let i = 0; i < b[key].length; i++) {
          obj[i] = b[key][i];
        }
        records.push(obj);
      }
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
    const { patientDetails, records } = this.state.rawatJalan;
    return (
      <Container>
        <Container>
          <Grid container columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                  size="small"
                  floated="right"
                />
              </Grid.Column>

              <Grid.Column>
                <h3>{patientDetails.nama_lengkap}</h3>
                <h4>{patientDetails.umur} Tahun</h4>
                <h4>{patientDetails.tanggal_lahir}</h4>
                <h4>{patientDetails.gender}</h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        {records.map((record, index) => {
          return (
            <Table key={index} celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">
                    {patientDetails.patientAddress}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Jenis Pasien</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["1"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Tanggal Masuk</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["2"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Anamnesis</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["3"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Diagnosis</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["4"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Rencana Penatalaksanaan</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["5"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Pengobatan</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["6"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Tindakan</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["7"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Pelayanan</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["8"]}</p>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          );
        })}
      </Container>
    );
  }
}

export default PatientDetails;
