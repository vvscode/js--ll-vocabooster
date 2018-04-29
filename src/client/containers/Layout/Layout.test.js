/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import 'client/routes';
import Layout from './Layout.component';

jest.mock('client/routes', () => []);

describe('Layout', () => {
  test('renders children correctly', () => {
    const wrapper = shallow(
      <Layout>
        <div className="child" />
      </Layout>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
