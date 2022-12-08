import { Component, Fragment } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Form, Grid, Button } from "semantic-ui-react";

const texts = [
  { text: "Anamnesis", name: "anamnesis" },
  { text: "Fisik", name: "fisik" },
  { text: "Diagnosis", name: "diagnosis" },
  { text: "Rencana Penatalaksanaan", name: "rp" },
  { text: "Pengobatan", name: "pengobatan" },
  { text: "Tindakan", name: "tindakan" },
  { text: "Pelayanan", name: "pelayanan" },
  { text: "Hasil Observasi", name: "obs" },
  { text: "Ringkasan Pulang", name: "ds" },
  { text: "Pelayanan", name: "pelayanan" },
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
                  <TextareaAutosize name={text.name} onChange={textAreaHandler} />
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
