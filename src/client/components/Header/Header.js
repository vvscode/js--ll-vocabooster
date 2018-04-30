import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './Header.less';

const MENU_ITEMS = [
  { to: '/', title: 'Home' },
  { to: '/about', title: 'About' },
];

class Header extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <Menu>
        {MENU_ITEMS.map(item => (
          <Menu.Item
            key={item.to + item.title}
            active={this.props.location.pathname === item.to}
          >
            <Link to={item.to}>{item.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default withRouter(Header);
