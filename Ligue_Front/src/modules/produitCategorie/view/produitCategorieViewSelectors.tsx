import { createSelector } from 'reselect';

const selectRaw = (state) => state.produitCategorie.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const produitCategorieViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default produitCategorieViewSelectors;
