import React, { Component } from "react";
import { Form, Transition } from "semantic-ui-react";
import RawatJalan from "./rawat-jalan.component";
import RawatInap from "./rawat-inap.component";
import GawatDarurat from "./gawat-darurat.component";
import medicalRecordsinstance from "../ethereum/instance-medical-records";
import web3 from "../ethereum/web3";

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
          p_address: "",
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
        agreement: "true",
      },
      rawatInap: {
        patientIdRI: {
          p_address: "",
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
        e_fullname: "",
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

  onSubmit = async (e) => {
    e.preventDefault();
    const d = new Date();
    const date = d.toLocaleDateString("id-ID", {
      dateStyle: "medium",
    });
    const time = d.toLocaleTimeString("id-ID", {
      timeStyle: "short",
    });

    const tanggalMasuk = `${date} ${time}`;

    const jenis = this.state.jenis;
    const accounts = await web3.eth.getAccounts();

    if (jenis === "Rawat Jalan") {
      const patientAddress = this.state.rawatJalan.patientIdRJ.p_address;
      const { p_address, fullname, umur, dob, gender } =
        this.state.rawatJalan.patientIdRJ;
      const outPatientDetails = [p_address, fullname, umur, dob, gender];
      console.log(outPatientDetails);
      const {
        jenis,
        anamnesis,
        diagnosis,
        rp,
        pengobatan,
        tindakan,
        pelayanan,
        agreement,
      } = this.state.rawatJalan;
      const outPatientData = [
        patientAddress,
        jenis,
        tanggalMasuk,
        anamnesis,
        diagnosis,
        rp,
        pengobatan,
        tindakan,
        pelayanan,
        agreement,
      ];
      console.log(outPatientData);

      try {
        await medicalRecordsinstance.methods
          .addOutPatient(outPatientDetails, outPatientData)
          .send({
            from: accounts[0],
            gas: "6000000",
          })
          .on("receipt", (receipt) => {
            console.log(receipt);
          });
      } catch (e) {
        console.log(e);
      }
    } else if (jenis === "Rawat Inap") {
      const patientAddress = this.state.rawatInap.patientIdRI.p_address;
      const { p_address, fullname, umur, dob, gender } =
        this.state.rawatInap.patientIdRI;
      const inPatientDetails = [p_address, fullname, umur, dob, gender];
      console.log(inPatientDetails);
      const {
        jenis,
        anamnesis,
        fisik,
        diagnosis,
        rp,
        pengobatan,
        tindakan,
        pelayanan,
        agreement,
        obs,
        ds,
      } = this.state.rawatInap;
      const inPatientData = [
        patientAddress,
        jenis,
        tanggalMasuk,
        anamnesis,
        fisik,
        diagnosis,
        rp,
        pengobatan,
        tindakan,
        agreement,
        obs,
        ds,
        accounts[0],
        pelayanan,
      ];
      console.log(inPatientData);

      try {
        await medicalRecordsinstance.methods
          .addInPatient(inPatientDetails, inPatientData)
          .send({
            from: accounts[0],
            gas: "6000000",
          })
          .on("receipt", (receipt) => {
            console.log(receipt);
          });
      } catch (e) {
        console.log(e);
      }
    } else if (jenis === "Emergency") {
      const address = this.state.gawatDarurat.address;
      const { pengantarPasien, fullname, hp, hubungan } =
        this.state.gawatDarurat.pengantar;
      const emergencyPatientDetails = [address, pengantarPasien, fullname, hp, hubungan];
      console.log(emergencyPatientDetails);
      const {
        jenis,
        kondisi,
        e_fullname,
        anamnesis,
        fisik,
        diagnosis,
        pengobatan,
        tindakan,
        lc,
        transport,
        gender,
      } = this.state.gawatDarurat;
      const emergencyPatientData = [
        address,
        jenis,
        e_fullname,
        gender,
        kondisi,
        tanggalMasuk,
        anamnesis,
        fisik,
        diagnosis,
        pengobatan,
        tindakan,
        lc,
        transport,
      ];
      console.log(emergencyPatientData);

      try {
        await medicalRecordsinstance.methods
          .addEmergencyPatient(emergencyPatientDetails, emergencyPatientData)
          .send({
            from: accounts[0],
            gas: "6000000",
          })
          .on("receipt", (receipt) => {
            console.log(receipt);
          });
      } catch (e) {
        console.log(e);
      }
    }
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
        patientIdRJ[e.target.name] = e.target.value;
        this.setState({ patientIdRJ });

        break;

      case "Rawat Inap":
        const { patientIdRI } = this.state.rawatInap;
        patientIdRI[e.target.name] = e.target.value;
        this.setState({ patientIdRI });

        break;

      case "Emergency":
        const {gawatDarurat} = this.state;
        gawatDarurat[e.target.name] = e.target.value;
        const { pengantar } = this.state.gawatDarurat;
        pengantar[e.target.name] = e.target.value;
        this.setState({ pengantar, gawatDarurat });
        const a = this.state;
        console.log(a);

        break;

      default:
        break;
    }
  };

  getSelectValue = (e) => {
    const jenis = this.state.jenis;

    switch (jenis) {
      case "Rawat Jalan":
        const { patientIdRJ } = this.state.rawatJalan;
        patientIdRJ["gender"] = e.target.innerText;
        this.setState({ patientIdRJ });

        break;

      case "Rawat Inap":
        const { patientIdRI } = this.state.rawatInap;
        patientIdRI["gender"] = e.target.innerText;
        this.setState({ patientIdRI });

        break;

      case "Emergency":
        const { gawatDarurat } = this.state;
        gawatDarurat["gender"] = e.target.innerText;
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
