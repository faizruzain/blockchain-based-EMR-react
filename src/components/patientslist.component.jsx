import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Pagination } from "semantic-ui-react";
import axios from "axios";

const address = window.ethereum.selectedAddress;

class PtientsList extends Component {
  state = { lists: [], activePage: "" };

  componentDidMount() {
    console.log(address);
    const lastActiveItem = localStorage.getItem("lastActivePage");
    this.getPatientsData(lastActiveItem === null ? "1" : lastActiveItem);
    this.setState({ activePage: lastActiveItem });
  }

  getPatientsData = (page) => {
    console.log(address);
    axios
      .get(
        `http://localhost:5000/get/patient/records?page=${page}&address=${address}`
      )
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

  nextPage = (event) => {
    const page = event.target.innerText;
    console.log(address);
    axios
      .get(
        `http://localhost:5000/get/patient/records?page=${page}&address=${address}`
      )
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

    this.setState({ activePage: page });
    localStorage.setItem("lastActivePage", page);
  };

  render() {
    const { lists, activePage } = this.state;

    return (
      <Fragment>
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
          <Pagination
            style={{
              marginTop: "20px",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "20px",
            }}
            totalPages={250}
            onPageChange={this.nextPage}
            activePage={activePage}
          />
        </Card.Group>
      </Fragment>
    );
  }
}

export default PtientsList;
