import React from 'react';
import { shallow } from 'enzyme';
import Component from './About.component';

describe('About', () => {
  let props;
  let getShallowComponent;

  beforeEach(() => {
    props = {
      actions: {},
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
/*
File was generated with tamm-cli from next settings:
{
  "path": "about",
  "addStyles": true,
  "connectedToRedux": "No",
  "componentName": "about",
  "camelizedComponentName": "About",
  "withRedux": false
}
*/
