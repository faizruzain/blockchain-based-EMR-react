import { Component, Fragment } from "react";
import { Form, Segment } from "semantic-ui-react";
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
    name: "p_address",
  },
  {
    label: "Nama Lengkap",
    placeholder: "Nama Lengkap",
    type: "text",
    name: "fullname",
  },
  {
    label: "Umur",
    placeholder: "Umur",
    type: "text",
    name: "umur",
  },
  {
    label: "Tanggal Lahir",
    placeholder: "Tanggal Lahir",
    type: "date",
    name: "dob",
  },
];

class RawatJalan extends Component {
  state = { selectValue: "" };
  render() {
    const { textAreaHandler, inputHandler, selectHandler } = this.props;
    return (
      <Fragment>
        <Segment>
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
              label="Jenis Kelamin"
              options={options}
              title="gender"
              placeholder="Jenis Kelamin"
              onChange={selectHandler}
            />
          </Form.Group>
        </Segment>

        <Segment>
          <FormRawatJalan textAreaHandler={textAreaHandler} />
        </Segment>
      </Fragment>
    );
  }
}

export default RawatJalan;
