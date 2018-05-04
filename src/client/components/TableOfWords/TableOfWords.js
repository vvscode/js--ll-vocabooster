import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table, Form, Input, Checkbox, Button } from 'semantic-ui-react';

class TableOfWords extends Component {
  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    words: PropTypes.arrayOf(
      PropTypes.shape({
        selected: PropTypes.bool,
        word: PropTypes.string,
        translation: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }).isRequired,
    ),
    onSubmit: PropTypes.func.isRequired,
  };
  static defaultProps = {
    words: [],
  };
  static getDerivedStateFromProps = (props, prevState) => ({
    words: props.words,
  });

  state = {
    words: [],
  };

  onSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit({ words: this.state.words.filter(i => i.selected) });
  };

  getHandler = id => (ev, { name, value, checked, type }) => {
    const newValue = type === 'checkbox' ? checked : value;
    this.setState(state => ({
      words: state.words.map(
        i =>
          i.id !== id
            ? i
            : {
                ...i,
                [name]: newValue,
              },
      ),
    }));
  };

  render() {
    const { words } = this.state;
    if (!words || !words.length) {
      return null;
    }
    return (
      <Fragment>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Selected to Add</Table.HeaderCell>
              <Table.HeaderCell>Word</Table.HeaderCell>
              <Table.HeaderCell>Translation</Table.HeaderCell>
              <Table.HeaderCell>Frequency</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {words.map((item, index) => (
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox
                    checked={item.selected}
                    onChange={this.getHandler(item.id)}
                    name="selected"
                  />
                </Table.Cell>
                <Table.Cell>{item.word}</Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={item.translation}
                    name="translation"
                    onChange={this.getHandler(item.id)}
                  />
                </Table.Cell>
                <Table.Cell collapsing textAlign="right">
                  {item.frequency}
                </Table.Cell>
              </Table.Row>
            ))}
            {/* <Table.Row>
              <Table.Cell colSpan="4">
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
              </Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>
        <Form.Field control={Button} onClick={this.onSubmit}>
          Submit
        </Form.Field>
      </Fragment>
    );
  }
}

export default TableOfWords;
