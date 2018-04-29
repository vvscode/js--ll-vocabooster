import React from 'react';
import { shallow } from 'enzyme';
import Component from './NotFound.component';

describe('NotFound', () => {
  let props;
  let getShallowComponent;

  beforeEach(() => {
    props = {};

    getShallowComponent = () => shallow(<Component {...props} />);
  });

  describe('render', () => {
    it('should render with title', () => {
      props.title = 'Some title';
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });
});
