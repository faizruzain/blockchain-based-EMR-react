import { Component } from "react";
import { Menu, Image, Grid, Segment } from "semantic-ui-react";
import Content from "./content.component";

class MyMenuAndContent extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    console.log(name);
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu color="black" fluid vertical>
            <Menu.Item>
              <Image
                src="https://thispersondoesnotexist.com/image"
                size="medium"
                // circular
              />
              <p>Doctor</p>
            </Menu.Item>

            <Menu.Item
              name="Bio"
              active={activeItem === "Bio"}
              onClick={this.handleItemClick}
            >
              Bio
            </Menu.Item>

            <Menu.Item
              name="My Patients"
              active={activeItem === "My Patients"}
              onClick={this.handleItemClick}
            >
              My Patients
            </Menu.Item>

            <Menu.Item
              name="LogOut"
              active={activeItem === "LogOut"}
              onClick={this.handleItemClick}
            >
              LogOut
            </Menu.Item>
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <Content content={this.state} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default MyMenuAndContent;
