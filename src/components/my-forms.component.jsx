import { Component, Fragment } from "react";
import { Form } from "semantic-ui-react";
import FormRawatJalan from "./form-rawat-jalan.component";

class MyForms extends Component {
  state = {};
  render() {
    const renderForm = () => {

    }

    console.log(this.props);
    const { jenis } = this.props;
    return (
      <Fragment>
        <FormRawatJalan/>
      </Fragment>
    );
  }
}

export default MyForms;
