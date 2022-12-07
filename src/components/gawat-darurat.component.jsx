import { Component, Fragment } from "react";
import { Form } from "semantic-ui-react";
import FormGawatDarurat from "./form-gawat-darurat.component";

const options = [
  { key: "m", text: "Laki-Laki", value: "male" },
  { key: "f", text: "Perempuan", value: "female" },
];

const inputs = [
  {
    label: "Nama Lengkap",
    placeholder: "Nama Lengkap",
    type: "text",
  },
  {
    label: "Kontak",
    placeholder: "Kontak",
    type: "text",
  },
  {
    label: "Hubungan",
    placeholder: "Hubungan",
    type: "text",
  },
];

class GawatDarurat extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h5>Identitas Pengantar Pasien</h5>
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
        </Form.Group>

        <Form.Input
          type="date"
          label="Tanggal Masuk"
          placeholder="Tanggal Masuk"
        />

        <FormGawatDarurat/>
      </Fragment>
    );
  }
}

export default GawatDarurat;
