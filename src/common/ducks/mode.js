import { MODES } from '../constants/mode';

const UPDATE_MODE = 'UPDATE_MODE';

export const updateMode = value => ({
  type: UPDATE_MODE,
  payload: value,
});

const initialState = {
  value: MODES[0],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MODE: {
      return {
        ...state,
        value: action.payload,
      };
    }

    default:
      return state;
  }
};
