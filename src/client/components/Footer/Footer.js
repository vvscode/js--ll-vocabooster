import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.less';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer__root">
        <Link to="/">Footer</Link>
      </div>
    );
  }
}

export default Footer;
