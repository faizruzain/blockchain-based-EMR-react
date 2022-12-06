import { Component } from "react";
import { Form } from "semantic-ui-react";

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class NewPatient extends Component {
  state = {};
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Input label="Nama Lengkap" placeholder="First name" />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
      </Form>
    );
  }
}

export default NewPatient;
