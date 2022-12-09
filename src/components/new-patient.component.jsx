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
    this.state = {
      jenis: "",
      rawatJalan: {
        patientIdRJ: {
          address: "",
          fullname: "",
          umur: "",
          dob: "",
          gender: "",
        },
        address: "",
        jenis: "Rawat Jalan",
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
        patientIdRI: {
          address: "",
          fullname: "",
          umur: "",
          dob: "",
          gender: "",
        },
        address: "",
        jenis: "Rawat Inap",
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
        jenis: "Gawat Darurat",
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
    const state = this.state;
    console.log(state);
  };

  getTextAreaValue = (e) => {
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
    const jenis = this.state.jenis;

    switch (jenis) {
      case "Rawat Jalan":
        const { patientIdRJ } = this.state.rawatJalan;
        const { rawatJalan } = this.state;
        patientIdRJ[e.target.name] = e.target.value;
        rawatJalan[e.target.name] = e.target.value;
        this.setState({ patientIdRJ, rawatJalan });

        break;

      case "Rawat Inap":
        const { patientIdRI } = this.state.rawatInap;
        const { rawatInap } = this.state;
        patientIdRI[e.target.name] = e.target.value;
        rawatInap[e.target.name] = e.target.value;
        this.setState({ patientIdRI, rawatInap });

        break;

      case "Emergency":
        const { pengantar } = this.state.gawatDarurat;
        pengantar[e.target.name] = e.target.value;
        this.setState({ pengantar });

        break;

      default:
        break;
    }
  };

  getSelectValue = (e, { value }) => {
    const jenis = this.state.jenis;

    switch (jenis) {
      case "Rawat Jalan":
        const { patientIdRJ } = this.state.rawatJalan;
        patientIdRJ[value] = e.target.innerText;
        this.setState({ patientIdRJ });

        break;

      case "Rawat Inap":
        const { patientIdRI } = this.state.rawatInap;
        patientIdRI[value] = e.target.innerText;
        this.setState({ patientIdRI });

        break;

      case "Emergency":
        const { gawatDarurat } = this.state;
        gawatDarurat[value] = e.target.innerText;
        this.setState({ gawatDarurat });

        break;

      default:
        break;
    }
  };

  render() {
    const renderJenis = () => {
      const jenis = this.state.jenis;
      if (jenis === "Rawat Jalan") {
        return (
          <RawatJalan
            textAreaHandler={this.getTextAreaValue}
            inputHandler={this.getInputValue}
            selectHandler={this.getSelectValue}
          />
        );
      } else if (jenis === "Rawat Inap") {
        return (
          <RawatInap
            textAreaHandler={this.getTextAreaValue}
            inputHandler={this.getInputValue}
            selectHandler={this.getSelectValue}
          />
        );
      } else if (jenis === "Emergency") {
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
