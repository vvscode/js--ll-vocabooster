import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'semantic-ui-react';

class CredentialsForm extends Component {
  static getDerivedStateFromProps = (props, prevState) => ({
    login: props.login,
    password: props.password,
  });
  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    login: PropTypes.string,
    password: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  };
  static defaultProps = {
    login: '',
    password: '',
  };

  state = {};

  onSubmit = ev => {
    ev.preventDefault();
    const { login, password } = this.state;
    this.props.onSubmit({
      login,
      password,
    });
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="login"
            placeholder="Lingualeo Login"
            autoComplete="login"
            value={this.state.login}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Input}
            name="password"
            placeholder="Password"
            type="password"
            autoComplete="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form.Group>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </Form>
    );
  }
}

export default CredentialsForm;
