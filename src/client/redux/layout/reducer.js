import types from './types';

const initialState = {
  errors: [],
  isErrorModalOpen: false,
};

export default function layout(state = initialState, action) {
  switch (action.type) {
    case types.PUSH_ERROR:
      return {
        ...state,
        errors: state.errors.concat([action.error]),
        isErrorModalOpen: true,
      };

    case types.REMOVE_ERROR:
      return {
        ...state,
        errors: state.errors.slice(0, -1),
        isErrorModalOpen: state.errors.length - 1 > 0,
      };
    default:
      return state;
  }
}
