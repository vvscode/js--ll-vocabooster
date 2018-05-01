import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

class CredentialsForm extends Component {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="login"
            placeholder="Lingualeo Login"
            onChange={this.handleChange}
          />
          <Form.Field
            control={Input}
            name="password"
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form.Group>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </Form>
    );
  }
}

export default CredentialsForm;
