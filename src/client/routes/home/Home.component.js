import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid } from 'semantic-ui-react';

import CredentialsForm from 'client/components/CredentialsForm';
import TextSourceForm from 'client/components/TextSourceForm';
import TableOfWords from 'client/components/TableOfWords';
import { SubRoutesWrapper } from 'client/components/RouteComponents';
import { getWords } from 'client/utils/api';

export default class HomeComponent extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      path: PropTypes.string,
      routes: PropTypes.array,
    }).isRequired,
  };

  state = {
    login: '111',
    password: '2',
    text: '',
    words: [],
  };

  handleSourceForm = ({ text }) => {
    this.setState({ text });
    getWords(text).then(words =>
      this.setState({ words: words.map(i => ({ ...i, selected: true })) }),
    );
  };
  handleCredentialsForm = ({ login, password }) =>
    this.setState({ login, password });
  handleWordsForm = ({ words }) => this.setState({ words });

  render() {
    const title = `Home`;
    return (
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={5}>
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
          </Grid.Column>
          <Grid.Column width={11}>
            <h4>{title}</h4>
            <Segment>
              <CredentialsForm
                login={this.state.login}
                password={this.state.password}
                onSubmit={this.handleCredentialsForm}
              />
            </Segment>
            <Segment>
              <TextSourceForm onSubmit={this.handleSourceForm} />
            </Segment>
            <Segment>
              <TableOfWords
                words={this.state.words}
                onSubmit={this.handleWordsForm}
              />
            </Segment>
            <SubRoutesWrapper route={this.props.route} />{' '}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
