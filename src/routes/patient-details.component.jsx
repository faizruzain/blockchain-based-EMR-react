import React from "react";
import { useParams } from "react-router-dom";

function PatientDetails() {
  let { address } = useParams();

  return <h1>Patient Details {address}</h1>;
}

export default PatientDetails;
