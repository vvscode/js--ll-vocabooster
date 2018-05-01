import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import CredentialsForm from 'client/components/CredentialsForm';
import TextSourceForm from 'client/components/TextSourceForm';
import TableOfWords from 'client/components/TableOfWords';
import { SubRoutesWrapper } from 'client/components/RouteComponents';

export default class HomeComponent extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      path: PropTypes.string,
      routes: PropTypes.array,
    }).isRequired,
  };

  render() {
    const title = `Home`;
    return (
      <div className="layout">
        <div className="hero-wrapper">
          <h4>{title}</h4>
          <Segment>
            <CredentialsForm />
          </Segment>
          <Segment>
            <TextSourceForm />
          </Segment>
          <Segment>
            <TableOfWords />
          </Segment>

          <SubRoutesWrapper route={this.props.route} />
        </div>
      </div>
    );
  }
}
