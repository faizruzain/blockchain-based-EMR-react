import { Component } from "react";
import MyMenu from "../components/my-menu-and-content.component";
import Content from "../components/content.component";
import { Grid, Segment } from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <MyMenu />
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <Content />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;
