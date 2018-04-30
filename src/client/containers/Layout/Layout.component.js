import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header as SemanticHeader } from 'semantic-ui-react';
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
      <Container>
        <SemanticHeader>
          <Header title={this.props.children.props.title} />
        </SemanticHeader>

        <div className="Layout__layoutContent">{this.props.children}</div>
        <Footer />
      </Container>
    );
  }
}

export default Layout;
