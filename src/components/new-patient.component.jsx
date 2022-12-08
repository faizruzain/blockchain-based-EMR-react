import React, { Component } from "react";
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
    // this.inputRef = React.createRef();
    // this.myRef = React.createRef();
    this.state = {
      jenis: "",
      rawatJalan: {
        patientId: {
          address: "",
          fullname: "",
          umur: "",
          dob: "",
          gender: "",
        },
        address: "",
        jenis: "",
        dateAndTime: "",
        anamnesis: "",
        diagnosis: "",
        rp: "",
        pengobatan: "",
        tindakan: "",
        pelayanan: "",
        agreement: true,
      },
      rawatInap: {
        patientId: {
          address: "",
          fullname: "",
          umur: "",
          dob: "",
          gender: "",
        },
        address: "",
        jenis: "",
        dateAndTime: "",
        anamnesis: "",
        fisik: "",
        diagnosis: "",
        rp: "",
        pengobatan: "",
        tindakan: "",
        agreement: true,
        observasi: "",
        ds: "",
        doctor: "",
        pelayanan: "",
      },
      gawatDarurat: {
        pengantar: {
          pengantarPasien: "Pengantar Pasien",
          fullname: "",
          hp: "",
          hubungan: "",
        },
        address: "",
        jenis: "",
        konsdisi: "",
        dateAndTime: "",
        anamnesis: "",
        fisik: "",
        diagnosis: "",
        pengobatan: "",
        tindakan: "",
        lc: "",
        transport: "",
      },
    };
  }

  renderForm = (e) => {
    this.setState({ jenis: e.target.innerText });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // const elements = e.target.elements; // object
  };

  getTextAreaValue = (e) => {
    // console.log(e.target); // by name
    const jenis = this.state.jenis;
    switch (jenis) {
      case "Rawat Jalan":
        console.log(jenis);
        const { rawatJalan } = this.state;
        rawatJalan[e.target.name] = e.target.value;
        this.setState({ rawatJalan });
        const a = this.state.rawatJalan;
        console.log(a);
        break;

      default:
        break;
    }
  };

  getInputValue = (e) => {
    console.log(e.target.value);
  };

  getSelectValue = (e) => {
    console.log(e.target.innerText);
  };

  render() {
    const renderJenis = () => {
      const jenis = this.state.jenis;
      if (jenis === "Rawat Jalan") {
        console.log(jenis);
        return (
          <RawatJalan
            textAreaHandler={this.getTextAreaValue}
            inputHandler={this.getInputValue}
            selectHandler={this.getSelectValue}
          />
        );
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
            onChange={this.renderForm}
          />
        </Form.Group>

        {renderJenis()}
      </Form>
    );
  }
}

export default NewPatient;
