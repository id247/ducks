const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const increment = () => ({
  type: INCREMENT_COUNT,
});

export const decrement = () => ({
  type: DECREMENT_COUNT,
});

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT: {
      return {
        ...state,
        value: state.value + 1,
      };
    }

    case DECREMENT_COUNT: {
      return {
        ...state,
        value: state.value - 1,
      };
    }

    default:
      return state;
  }
};
