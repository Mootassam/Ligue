import { createSelector } from 'reselect';

const selectRaw = (state) => state.dons.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const donsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default donsViewSelectors;
