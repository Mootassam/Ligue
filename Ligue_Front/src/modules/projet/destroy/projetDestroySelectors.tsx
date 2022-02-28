import { createSelector } from 'reselect';

const selectRaw = (state) => state.projet.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const projetDestroySelectors = {
  selectLoading,
};

export default projetDestroySelectors;
