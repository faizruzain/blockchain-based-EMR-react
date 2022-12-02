import { Component, Fragment } from "react";
import { Menu, Icon } from "semantic-ui-react";

class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Fragment>
        <Menu stackable>
          <Menu.Item>
            <Icon size="large" name="medrt" />
          </Menu.Item>

          <Menu.Item
            name="features"
            active={activeItem === "features"}
            onClick={this.handleItemClick}
          >
            Features
          </Menu.Item>
          <Menu.Item
            name="testimonials"
            active={activeItem === "testimonials"}
            onClick={this.handleItemClick}
          >
            Testimonials
          </Menu.Item>

          <Menu.Item
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={this.handleItemClick}
          >
            Sign-in
          </Menu.Item>
        </Menu>
      </Fragment>
    );
  }
}

export default Header;
