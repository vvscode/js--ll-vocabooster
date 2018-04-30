import React from 'react';
import PropTypes from 'prop-types';
import { SubRoutesWrapper } from 'client/components/RouteComponents';

export default class AboutComponent extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      path: PropTypes.string,
      routes: PropTypes.array,
    }).isRequired,
  };

  render() {
    const { route } = this.props;
    return (
      <div className="about__container">
        <div className="about__wrapper">
          <SubRoutesWrapper
            header={<h2>About header: {route.path}</h2>}
            route={route}
            footer={<h3>About footer</h3>}
          />
        </div>
      </div>
    );
  }
}
/*
File was generated with tamm-cli from next settings:
{
  "path": "about",
  "addStyles": true,
  "connectedToRedux": "No",
  "componentName": "about",
  "camelizedComponentName": "About",
  "withRedux": false
}
*/
