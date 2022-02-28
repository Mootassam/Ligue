import { createSelector } from 'reselect';

const selectRaw = (state) => state.mouvements.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mouvementsDestroySelectors = {
  selectLoading,
};

export default mouvementsDestroySelectors;
