import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  let props;
  let footer;

  beforeEach(() => {
    props = {
      /* List all properties with 'undefined' values */
    };

    footer = () => shallow(<Footer {...props} />);
  });

  it('renders correctly', () => {
    expect(footer()).toMatchSnapshot();
  });
});
