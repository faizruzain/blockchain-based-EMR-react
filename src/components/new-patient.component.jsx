import { Component } from "react";
import { Form } from "semantic-ui-react";
import RawatJalan from "./rawat-jalan.component";
import RawatInap from "./rawat-inap.component";
import Emergency from "./emergency.component";
import MyForms from "./my-forms.component";

const jenis = [
  { key: "a", text: "Rawat Jalan", value: "rawatJalan" },
  { key: "b", text: "Rawat Inap", value: "rawatInap" },
  { key: "c", text: "Emergency", value: "emergency" },
];

class NewPatient extends Component {
  state = { jenis: "" };

  test = (e) => {
    this.setState({
      jenis: e.target.innerText,
    });
  };

  render() {
    const renderJenis = () => {
      const jenis = this.state.jenis;
      if (jenis === "Rawat Jalan") {
        console.log(jenis);
        return <RawatJalan />;
      } else if (jenis === "Rawat Inap") {
        console.log(jenis);
        return <RawatInap />;
      } else if (jenis === "Emergency") {
        console.log(jenis);
        return <Emergency />;
      }
    };

    return (
      <Form widths="equal">
        <Form.Group>
          <Form.Select
            fluid
            label="Jenis Pasien"
            options={jenis}
            placeholder="Jenis Pasien"
            onChange={this.test}
          />
        </Form.Group>

        <Form.Group>{renderJenis()}</Form.Group>

        <MyForms jenis={this.state.jenis} />
      </Form>
    );
  }
}

export default NewPatient;
