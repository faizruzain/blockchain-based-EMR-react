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

class RawatJalan extends Component {
  state = { selectValue: "" };
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
            label="Gender"
            options={options}
            name="gender"
            placeholder="Gender"
            onChange={selectHandler}
          />
        </Form.Group>

        <Form.Input
          type="date"
          label="Tanggal Masuk"
          placeholder="Tanggal Masuk"
          onChange={inputHandler}
        />

        <FormRawatJalan textAreaHandler={textAreaHandler} />
      </Fragment>
    );
  }
}

export default RawatJalan;
