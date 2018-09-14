import { createSelector } from "reselect";

const counterSelector = state => state.counter;

export const counterValueSelector = createSelector(
  counterSelector,
  counter => counter.value
);
