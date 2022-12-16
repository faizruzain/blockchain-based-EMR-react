import React, { Component } from "react";
import RecordsRawatJalan from "../components/records-rawat-jalan.component";
import RecordsRawatInap from "../components/records-rawat-inap.component";
import RecordsGawatDarurat from "../components/records-gawat-darurat.component";
import medicalRecordsinstance from "../ethereum/instance-medical-records";
import web3 from "../ethereum/web3";

class PatientDetails extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      jenis: "",
      rawatJalan: {
        patientDetails: {},
        records: [],
      },
      rawatInap: {
        patientDetails: {},
        records: [],
      },
      gawatDarurat: {
        pengantar: {},
        records: [],
      },
    };
  }

  async componentDidMount() {
    const [, , , jenis, params] = window.location.pathname.split("/");

    this.setState({ address: params, jenis: jenis });

    const accounts = await web3.eth.getAccounts();

    if (jenis === "Rawat-Jalan") {
      const data = await medicalRecordsinstance.methods
        .getOutPatient(params)
        .call({
          from: accounts[0],
        });

      const { a, b } = data;

      const { patientDetails, records } = this.state.rawatJalan;

      patientDetails.patientAddress = a["patientAddress"];
      patientDetails.nama_lengkap = a["nama_lengkap"];
      patientDetails.umur = a["umur"];
      patientDetails.tanggal_lahir = a["tanggal_lahir"];
      patientDetails.gender = a["gender"];

      for (const key in b) {
        const obj = {};
        for (let i = 0; i < b[key].length; i++) {
          obj[i] = b[key][i];
        }
        records.push(obj);
      }

      this.setState({ patientDetails, records });
    } else if (jenis === "Rawat-Inap") {
      const data = await medicalRecordsinstance.methods
        .getInPatient(params)
        .call({
          from: accounts[0],
        });

      const { a, b } = data;

      const { patientDetails, records } = this.state.rawatInap;

      patientDetails.patientAddress = a["patientAddress"];
      patientDetails.nama_lengkap = a["nama_lengkap"];
      patientDetails.umur = a["umur"];
      patientDetails.tanggal_lahir = a["tanggal_lahir"];
      patientDetails.gender = a["gender"];

      for (const key in b) {
        const obj = {};
        for (let i = 0; i < b[key].length; i++) {
          obj[i] = b[key][i];
        }
        records.push(obj);
      }

      this.setState({ patientDetails, records });
    } else if (jenis === "Gawat-Darurat") {
      const data = await medicalRecordsinstance.methods
        .getEmergencyPatient(params)
        .call({
          from: accounts[0],
        });

      const { a, b } = data;

      const { pengantar, records } = this.state.gawatDarurat;

      pengantar.add = a["add"];
      pengantar.pengantar_pasien = a["pengantar_pasien"];
      pengantar.umur = a["umur"];
      pengantar.nama_lengkap = a["nama_lengkap"];
      pengantar.hp = a["hp"];
      pengantar.hubungan = a["hubungan"];

      for (const key in b) {
        const obj = {};
        for (let i = 0; i < b[key].length; i++) {
          obj[i] = b[key][i];
        }
        records.push(obj);
      }

      this.setState({ pengantar, records });
    }
  }

  render() {
    const { jenis } = this.state;
    const rj_patientDetails = this.state.rawatJalan.patientDetails;
    const rj_records = this.state.rawatJalan.records;
    const ri_patientDetails = this.state.rawatInap.patientDetails;
    const ri_records = this.state.rawatInap.records;
    const gd_pengantar = this.state.gawatDarurat.pengantar;
    const gd_records = this.state.gawatDarurat.records;

    const renderRecords = () => {
      if (jenis === "Rawat-Jalan") {
        return (
          <RecordsRawatJalan
            patientDetails={rj_patientDetails}
            records={rj_records}
          />
        );
      } else if (jenis === "Rawat-Inap") {
        return (
          <RecordsRawatInap
            patientDetails={ri_patientDetails}
            records={ri_records}
          />
        );
      } else if (jenis === "Gawat-Darurat") {
        return (
          <RecordsGawatDarurat pengantar={gd_pengantar} records={gd_records} />
        );
      }
    };

    return renderRecords();
  }
}

export default PatientDetails;
