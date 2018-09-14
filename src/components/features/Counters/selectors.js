import { createSelector } from "reselect";
import { counterValueSelector } from "../../../common/selectors/counter";

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
