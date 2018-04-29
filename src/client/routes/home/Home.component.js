import React from 'react';
import PropTypes from 'prop-types';

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
          <SubRoutesWrapper route={this.props.route} />
        </div>
      </div>
    );
  }
}
