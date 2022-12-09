import { Component, Fragment } from "react";
import { Form } from "semantic-ui-react";
import FormRawatInap from "./form-rawat-inap.component";

const options = [
  { key: "m", text: "Laki-Laki", value: "gender" },
  { key: "f", text: "Perempuan", value: "gender" },
];

const inputs = [
  {
    label: "ID Pasien",
    placeholder: "ID Pasien",
    type: "text",
    name: "address"
  },
  {
    label: "Nama Lengkap",
    placeholder: "Nama Lengkap",
    type: "text",
    name: "fullname"
  },
  {
    label: "Umur",
    placeholder: "Umur",
    type: "text",
    name: "umur"
  },
  {
    label: "Tanggal Lahir",
    placeholder: "Tanggal Lahir",
    type: "date",
    name: "dob"
  },
];

class RawatInap extends Component {
  state = {};
  render() {
    const { textAreaHandler, inputHandler, selectHandler } = this.props;
    // const { myRef } = this.props;
    // console.log(textAreaHandler, inputHandler);
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
                name={input.name}
                onChange={inputHandler}
              />
            );
          })}

          <Form.Select
            fluid
            label="Jenis Kelamin Pasien"
            options={options}
            title="gender"
            placeholder="Jenis Kelamin Pasien"
            onChange={selectHandler}
          />
        </Form.Group>

        <Form.Input
          type="date"
          label="Tanggal Masuk"
          placeholder="Tanggal Masuk"
          name="tanggalMasuk"
          onChange={inputHandler}
        />

        <FormRawatInap textAreaHandler={textAreaHandler} />
      </Fragment>
    );
  }
}

export default RawatInap;
