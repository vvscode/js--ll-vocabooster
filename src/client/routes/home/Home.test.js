import React from 'react';
import { shallow } from 'enzyme';
import Component from './Home.component';

describe('Home', () => {
  let props;
  let getShallowComponent;

  beforeEach(() => {
    props = {
      route: {},
    };

    getShallowComponent = () => shallow(<Component {...props} />);
  });

  describe('render', () => {
    it('should render with all props', () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });
});
