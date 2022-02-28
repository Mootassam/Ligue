import { createSelector } from 'reselect';

const selectRaw = (state) => state.detailsCampagne.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const detailsCampagneDestroySelectors = {
  selectLoading,
};

export default detailsCampagneDestroySelectors;
