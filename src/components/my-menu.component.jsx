import { Component } from "react";
import { Menu, Image, Grid, Segment } from "semantic-ui-react";
import Content from "./content.component";
import doctorImage from "../assets/doctor.jpg";

class MyMenu extends Component {
  state = {
    activeItem: "",
  };

  componentDidMount() {
    const lastActiveItem = localStorage.getItem("lastActiveItem");
    this.setState({ activeItem: lastActiveItem });
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    localStorage.setItem("lastActiveItem", name);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={3}>
          <Menu size="large" compact vertical style={{ marginBottom: "370px" }}>
            <Menu.Item>
              <Image
                src={doctorImage}
                size="medium"
                // circular
              />
              <p>Doctor</p>
            </Menu.Item>

            <Menu.Item
              name="bio"
              active={activeItem === "bio"}
              onClick={this.handleItemClick}
            >
              Bio
            </Menu.Item>

            <Menu.Item
              name="myPatients"
              active={activeItem === "myPatients"}
              onClick={this.handleItemClick}
            >
              My Patients
            </Menu.Item>

            <Menu.Item
              name="newPatient"
              active={activeItem === "newPatient"}
              onClick={this.handleItemClick}
            >
              New Patient
            </Menu.Item>

            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            >
              LogOut
            </Menu.Item>
          </Menu>
        </Grid.Column>

        <Grid.Column floated="right" stretched width={13}>
          <Segment>
            <Content content={this.state.activeItem} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default MyMenu;
