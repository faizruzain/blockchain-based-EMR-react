import { Component, Fragment } from "react";
import { Form } from "semantic-ui-react";
import FormRawatInap from "./form-rawat-inap.component";

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

class RawatInap extends Component {
  state = {};
  render() {
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

        <FormRawatInap/>
      </Fragment>
    );
  }
}

export default RawatInap;
