import { createSelector } from 'reselect';

const selectRaw = (state) => state.association.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const associationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default associationViewSelectors;
