import { Component } from "react";
import PtientsList from "./patientslist.component";
import Bio from "./bio.component";
import NewPatient from "./new-patient.component";

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
      return <NewPatient />;
    }
  }
}

export default Content;
