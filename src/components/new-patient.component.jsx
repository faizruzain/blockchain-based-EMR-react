import { Component } from "react";
import { Form, Transition } from "semantic-ui-react";
import RawatJalan from "./rawat-jalan.component";
import RawatInap from "./rawat-inap.component";
import GawatDarurat from "./gawat-darurat.component";

const jenis = [
  { key: "a", text: "Rawat Jalan", value: "rawatJalan" },
  { key: "b", text: "Rawat Inap", value: "rawatInap" },
  { key: "c", text: "Emergency", value: "emergency" },
];

class NewPatient extends Component {
  constructor() {
    super();
    this.state = { jenis: "" };
  }

  test = (e) => {
    this.setState({
      jenis: e.target.innerText,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const elements = e.target.elements; // object
    
  };

  polo = (e) => {
    console.log(e.target.value);
  }

  render() {
    const renderJenis = () => {
      const jenis = this.state.jenis;
      if (jenis === "Rawat Jalan") {
        console.log(jenis);
        return <RawatJalan handler={this.polo} />;
      } else if (jenis === "Rawat Inap") {
        console.log(jenis);
        return <RawatInap />;
      } else if (jenis === "Emergency") {
        console.log(jenis);
        return <GawatDarurat />;
      }
    };

    return (
      <Form onSubmit={this.onSubmit} widths="equal">
        <Form.Group>
          <Form.Select
            fluid
            label="Jenis Pasien"
            options={jenis}
            placeholder="Jenis Pasien"
            onChange={this.test}
          />
        </Form.Group>

        {renderJenis()}
      </Form>
    );
  }
}

export default NewPatient;
