import React from 'react';
import PropTypes from 'prop-types';

class ErrorPage extends React.Component {
  static propTypes = {
    error: PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    error: null,
  };

  render() {
    if (__DEV__ && this.props.error) {
      return (
        <div className="Error__root">
          <h1 className="Error__title">{this.props.error.name}</h1>
          <pre className="Error__stack">{this.props.error.stack}</pre>
        </div>
      );
    }

    return (
      <div className="Error__root">
        <h1 className="Error__title">Error</h1>
        <p className="Error__message">
          Sorry, a critical error occurred on this page.
        </p>
      </div>
    );
  }
}

export default ErrorPage;
