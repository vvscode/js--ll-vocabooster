import React from 'react';
import { strictEqual } from 'assert';

import * as appData from 'client/utils/appData';
import RequeireAuth from './RequeireAuth';

jest.mock('client/utils/appData');

describe('RequeireAuth', () => {
  let DummyComponent;
  beforeEach(() => {
    DummyComponent = () => <div>Dummy</div>;
  });

  it('renders redirect if user non-authenticated', () => {
    appData.isLoggedIn.mockReturnValue(false);
    expect(RequeireAuth(DummyComponent)()).toMatchSnapshot();
  });

  it('renders redirect to certain url if user non-authenticated and url passed', () => {
    appData.isLoggedIn.mockReturnValue(false);
    expect(
      RequeireAuth(DummyComponent, '/some-magic-path')(),
    ).toMatchSnapshot();
  });

  it('returns component itself if user is authenticated', () => {
    appData.isLoggedIn.mockReturnValue(true);
    strictEqual(RequeireAuth(DummyComponent), DummyComponent);
  });
});
