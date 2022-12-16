import { Component } from "react";
import { Container, Table } from "semantic-ui-react";

class RecordsGawatDarurat extends Component {
  render() {
    const { pengantar, records } = this.props;
    return (
      <Container>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                {pengantar.pengantar_pasien}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>Nama Lengkap</Table.Cell>
              <Table.Cell>{pengantar.nama_lengkap}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>No Telpon</Table.Cell>
              <Table.Cell>{pengantar.hp}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>Hubungan</Table.Cell>
              <Table.Cell>{pengantar.hubungan}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        {records.map((record, index) => {
          return (
            <Table key={index} celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">{record["0"]}</Table.HeaderCell>
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
                    <h5>Nama Pasien</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["2"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Jenis Kelamin Pasien</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["3"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Kondisi</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["4"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Tanggal Masuk</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["5"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Anamnesis</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["6"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Fisik</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["7"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Diagnosis</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["8"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Pengobatan</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["9"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Tindakan</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["10"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Kondisi Terakhir</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["11"]}</p>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>
                    <h5>Transport</h5>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{record["12"]}</p>
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

export default RecordsGawatDarurat;
