import { createSelector } from 'reselect';

const selectRaw = (state) => state.palier.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const palierDestroySelectors = {
  selectLoading,
};

export default palierDestroySelectors;
