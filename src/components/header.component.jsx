import { Component, Fragment } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Outlet } from "react-router-dom";

class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Fragment>
        <Menu>
          <Menu.Item>
            <Icon size="large" name="medrt" />
          </Menu.Item>

          <Menu.Menu position="right">
            {/* <Menu.Item
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
            </Menu.Item> */}

            <Menu.Item
              name="log-out"
              active={activeItem === "log-out"}
              onClick={this.handleItemClick}
            >
              Log-Out
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Outlet />
      </Fragment>
    );
  }
}

export default Header;
