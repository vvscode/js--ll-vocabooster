import React from 'react';
import { shallow } from 'enzyme';
import * as appData from 'client/utils/appData';

import Header from './Header';

jest.mock('client/utils/appData');

describe('Header', () => {
  let props;
  let header;
  let appDataDefault;

  beforeEach(() => {
    props = {
      /* List all properties with 'undefined' values */
    };
    header = () => shallow(<Header {...props} />);
    appDataDefault = appData.default;
  });

  afterEach(() => {
    appData.default = appDataDefault;
  });

  it('renders correctly for authenticated user', () => {
    expect(header()).toMatchSnapshot();
  });
});
