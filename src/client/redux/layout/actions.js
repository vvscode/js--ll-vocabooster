import types from './types';

function addErrorToQueue(error) {
  // do anything with error here

  return {
    type: types.PUSH_ERROR,
    error,
  };
}

function removeErrorFromQueue() {
  return {
    type: types.REMOVE_ERROR,
  };
}
export default {
  addErrorToQueue,
  removeErrorFromQueue,
};
