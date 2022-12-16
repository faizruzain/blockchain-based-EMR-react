import { Component, Fragment } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Form, Grid, Button } from "semantic-ui-react";

const texts = [
  { text: "Kondisi", name: "kondisi", placeholder: "Kondisi saat pasien tiba" },
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
    text: "Pengobatan dan Tindakan",
    name: "pengobatanDanTindakan",
    placeholder: "Pengobatan dan Tindakan",
  },
  {
    text: "Kondisi Terakhir",
    name: "lc",
    placeholder:
      "Ringkasan kondisi pasien sebelum meninggalkan pelayanan unit gawat darurat dan rencana tindak lanjut",
  },
  { text: "Transport", name: "transport", placeholder: "Sarana transportasi" },
  {
    text: "Pelayanan",
    name: "pelayanan",
    placeholder: "Pelayanan lain yang telah diberikan kepada pasien",
  },
];

class FormGawatDarurat extends Component {
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

export default FormGawatDarurat;
