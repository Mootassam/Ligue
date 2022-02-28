import { createSelector } from 'reselect';

const selectRaw = (state) => state.produitCategorie.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const produitCategorieDestroySelectors = {
  selectLoading,
};

export default produitCategorieDestroySelectors;
