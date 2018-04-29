import types from './types';

const init = (payload = 'Boilerplate') => ({
  type: types.INIT,
  payload,
});

function getUserProfile() {
  return async (dispatch, getState, services) => {
    const { Api, ErrorHandler } = services;

    try {
      const user = await Api.getUserProfile();
      return user;
    } catch (err) {
      return dispatch(ErrorHandler.addErrorToQueue(err));
    }
  };
}

export default {
  init,
  getUserProfile,
};
