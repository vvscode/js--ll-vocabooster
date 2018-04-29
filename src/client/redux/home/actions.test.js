import { strictEqual } from 'assert';
import actions from './actions';

describe('redux/home/actions', () => {
  let dispatch;
  let getState;
  let services;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    services = {
      Api: { getUserProfile: jest.fn() },
      ErrorHandler: { addErrorToQueue: jest.fn() },
    };
  });

  it('calls api.getUserProfile and returns the value', () => {
    const user = { name: 'Bob' };
    services.Api.getUserProfile.mockReturnValue(Promise.resolve(user));
    return actions
      .getUserProfile()(dispatch, getState, services)
      .then(userData => strictEqual(userData, user));
  });

  it('calls ErrorHandler.addErrorToQueue on error', () => {
    const err = { message: 'Guilty' };
    services.Api.getUserProfile.mockReturnValue(Promise.reject(err));
    return actions
      .getUserProfile()(dispatch, getState, services)
      .catch(error => strictEqual(error, err));
  });
});
