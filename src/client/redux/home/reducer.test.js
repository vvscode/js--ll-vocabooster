import { deepEqual, strictEqual } from 'assert';

import reducer from './reducer';
import actions from './actions';

describe('redux/home/reducer', () => {
  it('returns default state', () => {
    deepEqual(reducer(undefined, {}), {
      text: '',
    });
  });
  it('handle INIT', () => {
    const state = {
      some: 'prop',
      value: 1,
    };
    deepEqual(reducer(state, actions.init('Hola')), {
      ...state,
      text: 'Hola',
    });
  });
  it('returns current state by default', () => {
    const state = {
      some: 'prop',
      value: 1,
    };
    strictEqual(reducer(state, { type: 'unknown type' }), state);
  });
});
