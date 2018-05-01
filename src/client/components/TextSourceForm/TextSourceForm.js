import React, { Component } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';

class TextSourceForm extends Component {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <Form>
        <Form.Field
          control={TextArea}
          label="Source text"
          name="sourceText"
          placeholder="Source of your new words ..."
          onChange={this.handleChange}
        />
        <Form.Field control={Button}>Submit</Form.Field>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </Form>
    );
  }
}

export default TextSourceForm;
