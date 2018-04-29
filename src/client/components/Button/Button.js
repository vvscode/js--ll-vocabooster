import React from 'react';
import PropTypes from 'prop-types';
import './Button.less';

class BaseButton extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    type: 'default',
    style: {},
    disabled: false,
  };

  render() {
    const { type, children, onClick, style, disabled } = this.props;
    let className = '';

    switch (type) {
      case 'default':
        className = `Button__button Button__button-transparent`;
        break;
      case 'primary':
        className = 'Button__button';
        break;
      default:
        className = 'Button__button';
    }

    return (
      <button
        className={className}
        style={style}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

export default BaseButton;
