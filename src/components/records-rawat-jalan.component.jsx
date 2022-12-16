import { Component } from "react";
import { Container, Table } from "semantic-ui-react";

class RecordsRawatJalan extends Component {
  render() {
    const { patientDetails, records } = this.props;
    return (
      <Container>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="3">Identitas Pasien</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>ID Pasien</Table.Cell>
              <Table.Cell>{patientDetails.patientAddress}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Nama Pasien</Table.Cell>
              <Table.Cell>{patientDetails.nama_lengkap}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Tanggal Lahir</Table.Cell>
              <Table.Cell>{patientDetails.tanggal_lahir}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Jenis Kelamin</Table.Cell>
              <Table.Cell>{patientDetails.gender}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

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

export default RecordsRawatJalan;
