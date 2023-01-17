import { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { redirect } from "react-router-dom";
import axios from "axios";
import web3 from "../ethereum/web3";

class Login extends Component {
  state = { address: "", role: "" };

  async componentDidMount() {
    const [address] = await web3.eth.getAccounts();
    this.setState({ address: address });
  }

  // verify = async () => {
  //   const { address } = this.state;
  //   axios
  //     .get(`http://localhost:5000/verify?address=${address}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       const { role } = res.data;
  //       this.setState({ role: role });
  //       if (role === "doctor") {
  //         return redirect("http://localhost:3000/doctor/");
  //       } else if (role === "patient") {
  //         return redirect("http://localhost:3000/patient/");
  //       } else if (role === "unknown") {
  //         this.setState({ role: role });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render() {
    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.reload();
    });

    const verify = async () => {
      const { address } = this.state;
      axios
        .get(`https://skripsi-backend-service.onrender.com/verify?address=${address}`)
        .then((res) => {
          console.log(res.data);
          const { role } = res.data;
          this.setState({ role: role });
          if (role === "doctor") {
            window.location.replace("http://localhost:3000/doctor/")
            // return redirect("http://localhost:3000/doctor/");
          } else if (role === "patient") {
            window.location.replace("http://localhost:3000/patient/")
          } else if (role === "unknown") {
            this.setState({ role: role });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const { address } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as="h2" color="twitter" textAlign="center">
            Verify your address
          </Header>
          <Form size="large">
            <Segment stacked>
              <h3>{address}</h3>

              <Button onClick={verify} color="twitter" fluid size="large">
                Verify
              </Button>
            </Segment>
          </Form>
          <Message>Universitas Mercu Buana</Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
