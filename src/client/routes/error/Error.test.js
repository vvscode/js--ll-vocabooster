import React from 'react';
import { shallow } from 'enzyme';
import Component from './Error.component';

describe('Error', () => {
  let props;
  let getShallowComponent;

  beforeEach(() => {
    props = {
      error: null,
    };

    getShallowComponent = () => shallow(<Component {...props} />);
  });

  describe('render', () => {
    it('should render with no error', () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });

    it('should render with error', () => {
      props.error = {
        name: 'Some error',
        message: 'Some message',
        stack: 'Some stack',
      };
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });
});
