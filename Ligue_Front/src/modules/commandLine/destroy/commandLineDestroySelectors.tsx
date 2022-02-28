import { createSelector } from 'reselect';

const selectRaw = (state) => state.commandLine.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const commandLineDestroySelectors = {
  selectLoading,
};

export default commandLineDestroySelectors;
