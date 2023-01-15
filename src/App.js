import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Login from "./routes/login.component";
import Header from "./components/header.component";
import MyMenu from "./components/my-menu.component";
import PatientDetails from "./routes/patient-details.component";
import PatientDataDetails from "./components/render-patient-data.component";

class App extends Component {
  render() {
    return (
      <Container
        style={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/doctor" element={<Header />}>
            <Route path="/doctor" element={<MyMenu />} />
            <Route
              path="/doctor/patient-details/:jenis/:address"
              element={<PatientDetails />}
            />
            <Route
              path="/doctor/patient-details/:id"
              element={<PatientDataDetails />}
            />
          </Route>
        </Routes>
      </Container>
    );
  }
}

export default App;
