import React from 'react';
import PropTypes from 'prop-types';

const ContextType = {};

class App extends React.PureComponent {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return Object.assign({}, this.props.context);
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default App;
