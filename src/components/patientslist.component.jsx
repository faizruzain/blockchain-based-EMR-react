import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Pagination, Icon, Input } from "semantic-ui-react";
import axios from "axios";
import web3 from "../ethereum/web3";

class PtientsList extends Component {
  state = { lists: [], activePage: "" };

  async componentDidMount() {
    const lastActiveItem = localStorage.getItem("lastActivePage");
    this.getPatientsData(lastActiveItem === null ? "1" : lastActiveItem);
    this.setState({ activePage: lastActiveItem });
  }

  getPatientsData = async (page) => {
    const [address] = await web3.eth.getAccounts();
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

  nextPage = async (event) => {
    const [address] = await web3.eth.getAccounts();
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

  // find = async (e) => {
  //   console.log(e.target.value);
  //   const [address] = await web3.eth.getAccounts();
  //   const id = e.target.value;
  //   const url = `http://localhost:5000/get/patient/records?id=${id}&address=${address}`;
  //   axios
  //     .get(
  //       url
  //       // `http://localhost:5000/get/patient/records?id=63c3845b2261f918cc71eadf&address=0x71f07EE63b0B2db5a6F9ACC253E8D8Ff8653E17A`
  //     )
  //     .then((res) => {
  //       const data = res.data.data;
  //       console.log([data]);
  //       this.setState({ lists: data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       console.log("completed");
  //     });
  // };

  render() {
    const { lists, activePage } = this.state;

    return (
      <Fragment>
        {/* <Input
          icon={<Icon name="search" inverted circular link />}
          placeholder="Search..."
          fluid="true"
          style={{ marginBottom: "20px" }}
          onChange={this.find}
        /> */}
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
            totalPages={500}
            onPageChange={this.nextPage}
            activePage={activePage}
          />

        </Card.Group>
      </Fragment>
    );
  }
}

export default PtientsList;
