import { createSelector } from 'reselect';

const selectRaw = (state) => state.produit.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const produitViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default produitViewSelectors;
