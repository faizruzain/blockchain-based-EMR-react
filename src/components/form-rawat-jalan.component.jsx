import { Component, Fragment } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import { Form } from "semantic-ui-react";

class FormRawatJalan extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h1>Form Rawat Jalan</h1>
        <TextareaAutosize />
      </Fragment>
    );
  }
}

export default FormRawatJalan;
