import { createSelector } from 'reselect';

const selectRaw = (state) => state.mandat.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mandatDestroySelectors = {
  selectLoading,
};

export default mandatDestroySelectors;
