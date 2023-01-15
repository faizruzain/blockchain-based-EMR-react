import { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import doctorRelatioInstance from "../ethereum/instance-doctor-relations";
import web3 from "../ethereum/web3";
import axios from "axios";

class PtientsList extends Component {
  state = { lists: [] };

  componentDidMount() {
    this.getPatientsData();

  }

  getPatientsData = () => {
    axios
      .get("http://localhost:5000/get/patient/records?page=10")
      .then((res) => {
        const data = res.data.data;
        this.setState({ lists: data });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("completed");
      });
  };

  renderPatientsData = (records) => {
    if (!records.length) return null;

    return records.map((record, index) => {
      return (
        <Card key={index}>
          <Card.Content>
            <Card.Header>{record._id}</Card.Header>
            <Card.Meta>{record.sample_name}</Card.Meta>
            <Card.Description>
              <Link to={`/doctor/patient-details/${record._id}`}>
                {record._id}
              </Link>
            </Card.Description>
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    const { lists } = this.state;
    return (
      <Card.Group stackable itemsPerRow={2}>
        {lists.map((list, index) => {
          return (
            <Card key={index}>
              <Card.Content>
                <Card.Header>{list.sample_name}</Card.Header>
                <Card.Meta>{list.description}</Card.Meta>
                <Card.Description>
                  <Link to={`/doctor/patient-details/${list._id}`}>
                    {list._id}
                  </Link>
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
