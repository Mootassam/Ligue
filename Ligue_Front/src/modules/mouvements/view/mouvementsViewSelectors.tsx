import { createSelector } from 'reselect';

const selectRaw = (state) => state.mouvements.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mouvementsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default mouvementsViewSelectors;
