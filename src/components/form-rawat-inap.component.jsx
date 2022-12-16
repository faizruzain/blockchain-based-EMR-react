import { Component, Fragment } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Grid, Button } from "semantic-ui-react";

const texts = [
  {
    text: "Anamnesis",
    name: "anamnesis",
    placeholder: "Mencakup sekurang-kurangnya keluhan dan riwat penyakit",
  },
  {
    text: "Fisik",
    name: "fisik",
    placeholder: "Hasil pemeriksaan fisik dan penunjang medik",
  },
  { text: "Diagnosis", name: "diagnosis", placeholder: "Diagnosis dokter" },
  {
    text: "Rencana Penatalaksanaan",
    name: "rp",
    placeholder: "Rencana Penatalaksanaan",
  },
  {
    text: "Pengobatan dan Tindakan",
    name: "pengobatanDanTindakan",
    placeholder: "Pengobatan dan Tindakan",
  },

  {
    text: "Hasil Observasi",
    name: "obs",
    placeholder: "Catatan observasi klinis dan hasil pengobatan",
  },
  { text: "Ringkasan Pulang", name: "ds", placeholder: "Ringkasan pulang" },
  {
    text: "Pelayanan",
    name: "pelayanan",
    placeholder: "Pelayanan lain yang telah diberikan kepada pasien",
  },
];

class FormRawatInap extends Component {
  state = {};
  render() {
    const { textAreaHandler } = this.props;
    return (
      <Fragment>
        <Grid columns={2}>
          <Grid.Row>
            {texts.map((text, index) => {
              return (
                <Grid.Column key={index}>
                  <label>{text.text}</label>
                  <TextareaAutosize
                    placeholder={text.placeholder}
                    name={text.name}
                    onChange={textAreaHandler}
                  />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>

        <Button style={{ marginTop: "15px" }} fluid positive type="submit">
          Submit
        </Button>
      </Fragment>
    );
  }
}

export default FormRawatInap;
