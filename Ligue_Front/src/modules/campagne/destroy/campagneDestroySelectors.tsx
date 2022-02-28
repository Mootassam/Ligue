import { createSelector } from 'reselect';

const selectRaw = (state) => state.campagne.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const campagneDestroySelectors = {
  selectLoading,
};

export default campagneDestroySelectors;
