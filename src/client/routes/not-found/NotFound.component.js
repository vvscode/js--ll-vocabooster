import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import notfound from './svg/404.svg';

export default class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: '',
  };

  render() {
    return (
      <div className="NotFound__root">
        <div className="NotFound__container">
          <h1>{this.props.title}</h1>
          <div className="NotFound__mainWrapper">
            <div className="NotFound__errorWrapper">
              <div>
                <img src={notfound} alt="" />
              </div>
              <div>
                <div>
                  <h2 className="NotFound__title">Page not found</h2>
                </div>
                <div className="NotFound__errorCode">Error code: 404</div>
                <div>
                  <Link className="NotFound__button" to="/health-center">
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
