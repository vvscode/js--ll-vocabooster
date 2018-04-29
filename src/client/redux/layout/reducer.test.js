import { deepEqual, strictEqual } from 'assert';

import reducer from './reducer';
import actions from './actions';

describe('redux/layout/reducer', () => {
  it('returns current state by default', () => {
    const state = {
      some: 'prop',
      value: 1,
    };
    strictEqual(reducer(state, { type: 'unknown type' }), state);
  });

  it('returns default state', () => {
    deepEqual(reducer(undefined, {}), {
      errors: [],
      isErrorModalOpen: false,
    });
  });

  it('handle PUSH_ERROR/.addErrorToQueue', () => {
    const state = {
      some: 'prop',
      value: 1,
      errors: [1],
    };
    deepEqual(reducer(state, actions.addErrorToQueue(2)), {
      ...state,
      isErrorModalOpen: true,
      errors: [...state.errors, 2],
    });
  });

  it('handle REMOVE_ERROR/.removeErrorFromQueue', () => {
    const state = {
      some: 'prop',
      value: 1,
      errors: [1, 2, 3],
    };
    deepEqual(reducer(state, actions.removeErrorFromQueue()), {
      ...state,
      isErrorModalOpen: true,
      errors: [1, 2],
    });
  });

  it('sets isErrorModalOpen = false on empty errors list', () => {
    const state = {
      isErrorModalOpen: true,
      errors: [1],
    };
    deepEqual(reducer(state, actions.removeErrorFromQueue()), {
      ...state,
      isErrorModalOpen: false,
      errors: [],
    });
  });
});
