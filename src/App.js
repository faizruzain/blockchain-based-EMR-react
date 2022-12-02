import { Component } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Container } from "semantic-ui-react";
// import Home from "./routes/home.component";
import Login from "./routes/login.component";
import Header from "./components/header.component";
import MyMenuAndContent from "./components/my-menu-and-content.component";

class App extends Component {
  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Outlet />
                
              </>
            }
          >
            <Route index element={<MyMenuAndContent />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Container>
    );
  }
}

export default App;
