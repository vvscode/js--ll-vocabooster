import React from 'react';
import { shallow } from 'enzyme';
import Component from './SubRoutesWrapper';

describe('SubRoutesWrapper', () => {
  let props;
  let getComponent;

  beforeEach(() => {
    props = {
      header: null,
      footer: null,
      route: {
        path: '/test-path',
        routes: [],
      },
    };
    getComponent = () => shallow(<Component {...props} />);
  });

  it('renders header', () => {
    props.header = <div>Header</div>;
    expect(getComponent()).toMatchSnapshot();
  });

  it('renders footer', () => {
    props.footer = <div>Footer</div>;
    expect(getComponent()).toMatchSnapshot();
  });

  it('renders subrouted', () => {
    props.route.routes = [
      { path: '/test-path/p1', routes: [] },
      { path: '/test-path/p2', routes: [{ path: 'xxx', routes: [] }] },
    ];
    expect(getComponent()).toMatchSnapshot();
  });
});
