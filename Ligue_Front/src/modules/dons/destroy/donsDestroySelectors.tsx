import { createSelector } from 'reselect';

const selectRaw = (state) => state.dons.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const donsDestroySelectors = {
  selectLoading,
};

export default donsDestroySelectors;
