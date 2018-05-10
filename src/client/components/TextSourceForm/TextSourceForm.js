import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, TextArea } from 'semantic-ui-react';

class TextSourceForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {};

  onSubmit = ev => {
    ev.preventDefault();
    let { sourceText: text } = this.state;
    text = text.trim();
    if (!text) {
      return;
    }
    this.props.onSubmit({ text });
    ev.target.reset();
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field
          control={TextArea}
          label="Source text"
          name="sourceText"
          placeholder="Source of your new words ..."
          onChange={this.handleChange}
        />
        <Form.Field control={Button}>Submit</Form.Field>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </Form>
    );
  }
}

export default TextSourceForm;
