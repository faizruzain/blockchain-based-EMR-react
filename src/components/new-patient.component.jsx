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
        tanggalMasuk: "",
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
        tanggalMasuk: "",
        anamnesis: "",
        fisik: "",
        diagnosis: "",
        rp: "",
        pengobatan: "",
        tindakan: "",
        agreement: true,
        observasi: "",
        ds: "",
        doctor: "", // get from wallet
        pelayanan: "",
      },
      gawatDarurat: {
        pengantar: {
          pengantarPasien: "Pengantar Pasien",
          fullname: "",
          hp: "",
          hubungan: "",
        },
        address: "", // new account from wallet
        jenis: "",
        konsdisi: "",
        tanggalMasuk: "",
        anamnesis: "",
        fisik: "",
        diagnosis: "",
        pengobatan: "",
        tindakan: "",
        lc: "",
        transport: "",
        gender: "",
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
        const { rawatJalan } = this.state;
        rawatJalan[e.target.name] = e.target.value;
        this.setState({ rawatJalan });

        break;

      case "Rawat Inap":
        const { rawatInap } = this.state;
        rawatInap[e.target.name] = e.target.value;
        this.setState({ rawatInap });

        break;

      case "Emergency":
        const { gawatDarurat } = this.state;
        gawatDarurat[e.target.name] = e.target.value;
        this.setState({ gawatDarurat });

        break;

      default:
        break;
    }
  };

  getInputValue = (e) => {
    console.log(e.target.value);
  };

  getSelectValue = (e, {value, gender}) => {
    console.log(e.target.innerText);
    console.log(value, gender);
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
        return (
          <RawatInap
            textAreaHandler={this.getTextAreaValue}
            inputHandler={this.getInputValue}
            selectHandler={this.getSelectValue}
          />
        );
      } else if (jenis === "Emergency") {
        console.log(jenis);
        return (
          <GawatDarurat
            textAreaHandler={this.getTextAreaValue}
            inputHandler={this.getInputValue}
            selectHandler={this.getSelectValue}
          />
        );
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
