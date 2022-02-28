import { createSelector } from 'reselect';

const selectRaw = (state) => state.campagne.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const campagneViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default campagneViewSelectors;
