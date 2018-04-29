import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

export default class extends React.Component {
  static propTypes = {
    header: PropTypes.element,
    footer: PropTypes.element,
    route: PropTypes.shape({
      path: PropTypes.string,
      routes: PropTypes.array,
    }).isRequired,
  };

  static defaultProps = {
    header: null,
    footer: null,
  };

  render() {
    return (
      <div>
        {this.props.header}
        {this.props.route && <div>{renderRoutes(this.props.route.routes)}</div>}
        {this.props.footer}
      </div>
    );
  }
}
