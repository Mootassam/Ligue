import { createSelector } from 'reselect';

const selectRaw = (state) => state.historiquePoints.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const historiquePointsDestroySelectors = {
  selectLoading,
};

export default historiquePointsDestroySelectors;
