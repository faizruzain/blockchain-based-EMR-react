import { Component, Fragment } from "react";
import { Form, Segment } from "semantic-ui-react";
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
        <Segment>
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
                  onChange={inputHandler}
                />
              );
            })}
          </Form.Group>
        </Segment>

        <Segment>
          <Form.Group>
            <Form.Input
              key="p"
              label="ID Pasien"
              placeholder="ID Pasien"
              type="text"
              name="address"
              onChange={inputHandler}
            />

            <Form.Input
              key="q"
              label="Nama Lengkap"
              placeholder="Nama Lengkap"
              type="text"
              name="e_fullname"
              onChange={inputHandler}
            />

            <Form.Select
              fluid
              label="Jenis Kelamin Pasien"
              options={options}
              title="gender"
              placeholder="Jenis Kelamin Pasien"
              onChange={selectHandler}
            />
          </Form.Group>

          <FormGawatDarurat textAreaHandler={textAreaHandler} />
        </Segment>
      </Fragment>
    );
  }
}

export default GawatDarurat;
