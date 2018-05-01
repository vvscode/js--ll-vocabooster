import React from 'react';
import { shallow } from 'enzyme';
import Component from './CredentialsForm';

describe('CredentialsForm', () => {
  let props;
  let getShallowComponent;

  beforeEach(() => {
    props = {};

    getShallowComponent = () => shallow(<Component {...props} />);
  });

  describe('render', () => {
    it('should render with all props', () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });
});
