import React from 'react';
import { Link } from 'react-router-dom';
import './Header.less';

class Header extends React.Component {
  render() {
    return (
      <div className="Header__root">
        <div className="Header__container">
          <Link to="/">Header</Link>
        </div>
      </div>
    );
  }
}

export default Header;
