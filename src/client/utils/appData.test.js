import { strictEqual } from 'assert';
import * as appData from './appData';

describe('isLoggedIn', () => {
  let dataUser;
  let data;
  beforeEach(() => {
    data = appData.default;
    dataUser = data.user;
  });

  afterEach(() => {
    appData.default.user = dataUser;
  });

  it('returns false if no user provided', () => {
    delete data.user;
    strictEqual(appData.isLoggedIn(), false);
  });

  it('returns false if user is empty', () => {
    data.user = {};
    strictEqual(appData.isLoggedIn(), false);
  });

  it('returns true if user is non-empty', () => {
    data.user = { name: 'Bob' };
    strictEqual(appData.isLoggedIn(), true);
  });
});
