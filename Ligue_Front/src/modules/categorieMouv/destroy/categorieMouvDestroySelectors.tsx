import { createSelector } from 'reselect';

const selectRaw = (state) => state.categorieMouv.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const categorieMouvDestroySelectors = {
  selectLoading,
};

export default categorieMouvDestroySelectors;
