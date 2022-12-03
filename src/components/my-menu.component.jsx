import { Component } from "react";
import { Menu, Image, Grid, Segment } from "semantic-ui-react";
import Content from "./content.component";
import doctorImage from "../assets/doctor.jpg";

class MyMenu extends Component {
  constructor() {
    super();

    this.state = {
      activeItem: "bio",
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu size="massive" color="black" fluid vertical>
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
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            >
              LogOut
            </Menu.Item>
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <Content content={this.state.activeItem} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default MyMenu;
