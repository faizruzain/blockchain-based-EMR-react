import { Component, Fragment } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Form, Grid, Button } from "semantic-ui-react";

const texts = [
  { text: "Anamnesis" },
  { text: "Diagnosis" },
  { text: "Rencana Penatalaksanaan" },
  { text: "Pengobatan" },
  { text: "Tindakan" },
  { text: "Pelayanan" },
];

class FormRawatJalan extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Grid columns={2}>
          <Grid.Row>
            {texts.map((text, index) => {
              return (
                <Grid.Column key={index}>
                  <label>{text.text}</label>
                  <TextareaAutosize onChange={this.props.handler} />
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

export default FormRawatJalan;
