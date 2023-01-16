import { Component } from "react";
import PtientsList from "./patientslist.component";
import Bio from "./bio.component";
// import NewPatient from "./new-patient.component";
import AddNewPatient from "./add-new-patient.component";
// import PatientDataDetails from "./render-patient-data.component";
import PatientRecords from "./patient-records.component";

class Content extends Component {
  state = {
    content: "",
  };

  render() {
    const { content } = this.props;

    if (content === "bio") {
      return <Bio />;
    } else if (content === "myPatients") {
      return <PtientsList />;
    } else if (content === "newPatient") {
      return <AddNewPatient />;
    } else if (content === "patientRecords") {
      return <PatientRecords/>
    }
  }
}

export default Content;
