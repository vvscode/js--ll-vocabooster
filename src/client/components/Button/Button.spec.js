import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  let props;
  let button;

  beforeEach(() => {
    props = {
      /* List all properties with 'undefined' values */
      onClick: jest.fn(),
      style: {},
    };

    button = () => shallow(<Button {...props} />);
  });

  it('should user correct className for each type', () => {
    props.type = 'default';
    expect(button()).toMatchSnapshot('explicit default type');

    props.type = 'primary';
    expect(button()).toMatchSnapshot('primary type');

    props.type = 'xxx';
    expect(button()).toMatchSnapshot('implicit default type');
  });

  it('should use `disabled = true` property correctly', () => {
    props.disabled = true;
    const btn = button();
    expect(btn).toMatchSnapshot('disabled button');
  });

  it('should use `disabled = false` property correctly', () => {
    props.disabled = false;
    const btn = button();
    expect(btn).toMatchSnapshot('enabled button');
  });
  it('renders children correctly', () => {
    props.children = <div>Test</div>;
    expect(button).toMatchSnapshot('enabled button');
  });
});
