import { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import doctorRelatioInstance from "../ethereum/instance-doctor-relations";
import web3 from "../ethereum/web3";

class PtientsList extends Component {
  state = {lists: []};

  async componentDidMount() {
    try {
      const accounts = await web3.eth.getAccounts();
      const data = await doctorRelatioInstance.methods
        .getDoctorRelations(accounts[0])
        .call({ from: accounts[0] });

      let a = [];

      for (const key in data) {
        a.push(data[key])
      }

      this.setState({lists: a})

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {lists} = this.state;
    return (
      <Card.Group stackable itemsPerRow={2}>
        {lists.map((list, index) => {
          return (
            <Card key={index}>
              <Card.Content>
                <Card.Header>Matthew Harris</Card.Header>
                <Card.Meta>Co-Worker</Card.Meta>
                <Card.Description>
                  <Link to={`/doctor/patient-details/${list}`}>{list}</Link>
                </Card.Description>
              </Card.Content>
            </Card>
          );
        })}
        {/* <Card>
          <Card.Content>
            <Card.Header>Matthew Harris</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>
              <Link
                to={
                  "/doctor/patient-details/0x4406dEA588d4E4e19312FA913011fF9697ac84b2"
                }
              >
                0x4406dEA588d4E4e19312FA913011fF9697ac84b2
              </Link>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header content="Jake Smith" />
            <Card.Meta content="Musicians" />
            <Card.Description content="0x51C9A0d9ed79B064e3106dAeF523Def390D887b6" />
          </Card.Content>
        </Card>

        <Card>
          <Card.Content
            header="Elliot Baker"
            meta="Friend"
            description="0x152d03E43ccc752A270c474eD778a7A7c82e0243"
          />
        </Card>

        <Card
          header="Jenny Hess"
          meta="Friend"
          description="0xCFF8961C5C739Dec2C08A4Bb3632E83AE45e8FEA"
        /> */}
      </Card.Group>
    );
  }
}

export default PtientsList;
