import { createSelector } from "reselect";
import { modeValueSelector } from "../../../common/selectors/mode";

const counterSelector = state => state.counter;

export const counterValueSelector = createSelector(
  counterSelector,
  counter => counter.value
);

export const counterDescriptionSelector = createSelector(
  counterValueSelector,
  value => {
    if (value > 0) {
      return `It's positive!`;
    } else if (value < 0) {
      return `It's negative`;
    }

    return "Equall to zero";
  }
);

export const counterMultiplyedByModeSelector = createSelector(
  counterValueSelector,
  modeValueSelector,
  (counter, mode) => counter * mode
);
