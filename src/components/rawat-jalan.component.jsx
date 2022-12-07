import { Component, Fragment } from "react";
import { Form } from "semantic-ui-react";
import FormRawatJalan from "./form-rawat-jalan.component";

const options = [
  { key: "m", text: "Laki-Laki", value: "male" },
  { key: "f", text: "Perempuan", value: "female" },
];

const inputs = [
  {
    label: "ID Pasien",
    placeholder: "ID Pasien",
    type: "text",
  },
  {
    label: "Nama Lengkap",
    placeholder: "Nama Lengkap",
    type: "text",
  },
  {
    label: "Umur",
    placeholder: "Umur",
    type: "text",
  },
  {
    label: "Tanggal Lahir",
    placeholder: "Tanggal Lahir",
    type: "date",
  },
];

class RawatJalan extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Form.Group>
          {inputs.map((input, index) => {
            return (
              <Form.Input
                key={index}
                label={input.label}
                placeholder={input.placeholder}
                type={input.type}
              />
            );
          })}

          <Form.Select
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>

        <Form.Input
          type="date"
          label="Tanggal Masuk"
          placeholder="Tanggal Masuk"
        />

        <FormRawatJalan handler={this.props.handler}/>
      </Fragment>
    );
  }
}

export default RawatJalan;
