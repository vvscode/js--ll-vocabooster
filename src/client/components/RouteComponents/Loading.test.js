/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
