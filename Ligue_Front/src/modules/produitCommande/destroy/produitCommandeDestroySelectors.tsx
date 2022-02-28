import { createSelector } from 'reselect';

const selectRaw = (state) => state.produitCommande.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const produitCommandeDestroySelectors = {
  selectLoading,
};

export default produitCommandeDestroySelectors;
