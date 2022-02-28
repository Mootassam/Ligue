import { createSelector } from 'reselect';

const selectRaw = (state) => state.historiquePoints.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const historiquePointsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default historiquePointsViewSelectors;
