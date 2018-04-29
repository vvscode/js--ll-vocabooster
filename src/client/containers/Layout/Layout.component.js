import React from 'react';
import PropTypes from 'prop-types';

// external-global styles must be imported in your JS.
import 'normalize.css';
import Header from 'client/components/Header/Header';
import Footer from 'client/components/Footer/Footer';

import './Layout.css';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div className="Layout__appWrapper">
        <Header title={this.props.children.props.title} />
        <div className="Layout__layoutContent">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
