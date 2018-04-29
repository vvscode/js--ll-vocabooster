/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import 'client/routes';
import App from './App.component';

describe('App', () => {
  test('renders children correctly', () => {
    const context = {};
    const wrapper = shallow(
      <App context={context}>
        <div className="child" />
      </App>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
