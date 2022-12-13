import { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import doctorRelatioInstance from "../ethereum/instance-doctor-relations";
import web3 from "../ethereum/web3";

class PtientsList extends Component {
  state = { lists: [] };

  async componentDidMount() {
    try {
      const accounts = await web3.eth.getAccounts();
      const data = await doctorRelatioInstance.methods
        .getDoctorRelations(accounts[0])
        .call({ from: accounts[0] });

      const arr = [];

      let a = 0;
      for (let i = 0; i < data.length; i++) {
        const obj = {};
        obj.name = data[i][a];
        obj.jenis = data[i][a + 1];
        obj.add = data[i][a + 2];
        arr.push(obj);
      }
      this.setState({ lists: arr });
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
                <Card.Header>{list.name}</Card.Header>
                <Card.Meta>{list.jenis}</Card.Meta>
                <Card.Description>
                  <Link to={`/doctor/patient-details/${list.add}`}>{list.add}</Link>
                </Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}

export default PtientsList;
