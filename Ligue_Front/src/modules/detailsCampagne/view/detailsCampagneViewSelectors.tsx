import { createSelector } from 'reselect';

const selectRaw = (state) => state.detailsCampagne.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const detailsCampagneViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default detailsCampagneViewSelectors;
