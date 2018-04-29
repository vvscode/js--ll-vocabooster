/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { mount } from 'enzyme';
import Home from 'client/routes/home';
import { setTitle } from 'client/utils/window';
import AsyncPageLoader from './AsyncPageLoader';

jest.mock('client/routes/home');
jest.mock('client/utils/window');
// jest.useFakeTimers();

const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));
const DummyComponent = () => <div>Dummy</div>;

describe('AsyncPageLoader', () => {
  beforeEach(() => {
    Home.mockReturnValue({
      component: () => <DummyComponent />,
    });
  });

  describe('render', () => {
    test('renders correctly', async () => {
      const AsyncComponent = AsyncPageLoader('home');
      const component = mount(<AsyncComponent />);
      expect(component).toMatchSnapshot('loading');
      await waitFor(100);
      component.update();
      expect(component).toMatchSnapshot('loaded');
      expect(setTitle).toBeCalledWith('Lingualeo VocaBooster');
    });

    test('renders correctly from async module', async () => {
      Home.mockReturnValue(
        Promise.resolve({
          title: 'Some title',
          component: () => <DummyComponent />,
        }),
      );
      const AsyncComponent = AsyncPageLoader('home');
      const component = mount(<AsyncComponent />);
      expect(component).toMatchSnapshot('loading');
      await waitFor(100);
      component.update();
      expect(component).toMatchSnapshot('loaded');
    });
  });

  describe('handle title', () => {
    test('set default title if not provided', async () => {
      const AsyncComponent = AsyncPageLoader('home');
      mount(<AsyncComponent />);
      await waitFor(100);
      expect(setTitle).toBeCalledWith('Lingualeo VocaBooster');
    });

    test('set custom title with prefix/postfix if provided', async () => {
      Home.mockReturnValue({
        title: 'Some title',
        component: () => <DummyComponent />,
      });
      const AsyncComponent = AsyncPageLoader('home');
      mount(<AsyncComponent />);
      await waitFor(100);
      expect(setTitle).toBeCalledWith('[Lingualeo VocaBooster]: Some title *');
    });
  });
});
