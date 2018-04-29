import types from './types';

const initialState = {
  text: '',
};

export default function healthCenter(state = initialState, action) {
  switch (action.type) {
    case types.INIT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
}
