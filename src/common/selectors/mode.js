import { createSelector } from 'reselect';

const modeSelector = state => state.mode;

export const modeValueSelector = createSelector(
  modeSelector,
  mode => mode.value,
);
