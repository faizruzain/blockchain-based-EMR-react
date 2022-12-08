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
    name: "fullname",
  },
  {
    label: "Kontak",
    placeholder: "Kontak",
    type: "text",
    name: "hp",
  },
  {
    label: "Hubungan",
    placeholder: "Hubungan",
    type: "text",
    name: "hubungan",
  },
];

class GawatDarurat extends Component {
  state = {};
  render() {
    const { textAreaHandler, inputHandler, selectHandler } = this.props;
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
                name={input.name}
              />
            );
          })}

          <Form.Select
            fluid
            label="Gender"
            options={options}
            title="gender"
            placeholder="Gender"
            onChange={selectHandler}
          />
        </Form.Group>

        <Form.Group>
          <Form.Select
            fluid
            label="Jenis Kelamin Pasien"
            options={options}
            title="gender"
            placeholder="Gender"
            onChange={selectHandler}
          />

          <Form.Input
            type="date"
            label="Tanggal Masuk"
            placeholder="Tanggal Masuk"
            name="tanggalMasuk"
            onChange={inputHandler}
          />
        </Form.Group>

        <FormGawatDarurat textAreaHandler={textAreaHandler} />
      </Fragment>
    );
  }
}

export default GawatDarurat;
