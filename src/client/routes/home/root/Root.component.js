import React from 'react';
import appData from 'client/utils/appData';

export default class RootComponent extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className="root__container">
        <div className="root__wrapper">
          <pre>{JSON.stringify(appData, null, 2)}</pre>
        </div>
      </div>
    );
  }
}
