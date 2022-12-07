import { Component, Fragment } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Form, Grid, Button } from "semantic-ui-react";

const texts = [
  { text: "Anamnesis" },
  { text: "Fisik" },
  { text: "Diagnosis" },
  { text: "Rencana Penatalaksanaan" },
  { text: "Pengobatan" },
  { text: "Tindakan" },
  { text: "Pelayanan" },
  { text: "Hasil Observasi" },
  { text: "Ringkasan Pulang" },
  { text: "Pelayanan" },
];

class FormRawatInap extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Grid columns={2}>
          <Grid.Row>
            {texts.map((text, index) => {
              return (
                <Grid.Column key={index}>
                  <label>{text.text}</label>
                  <TextareaAutosize />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>

        <Button style={{marginTop: "15px"}} fluid positive type="submit">
          Submit
        </Button>
      </Fragment>
    );
  }
}

export default FormRawatInap;
