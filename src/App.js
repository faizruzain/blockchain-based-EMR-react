import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Login from "./routes/login.component";
import Header from "./components/header.component";
import MyMenu from "./components/my-menu.component";
import PatientDetails from "./routes/patient-details.component";

class App extends Component {
  render() {
    return (
      <Container
        
        style={{ marginTop: "20px", marginRight: "20px", marginLeft: "20px" }}
      >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/doctor" element={<MyMenu />} />
            <Route
              path="/doctor/patient-details/:address"
              element={<PatientDetails />}
            />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Container>
    );
  }
}

export default App;
