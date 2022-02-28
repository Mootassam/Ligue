import { createSelector } from 'reselect';

const selectRaw = (state) => state.categorieMouv.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const categorieMouvViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default categorieMouvViewSelectors;
