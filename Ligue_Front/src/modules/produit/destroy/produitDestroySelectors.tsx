import { createSelector } from 'reselect';

const selectRaw = (state) => state.produit.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const produitDestroySelectors = {
  selectLoading,
};

export default produitDestroySelectors;
