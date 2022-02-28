import { createSelector } from 'reselect';

const selectRaw = (state) => state.votes.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const votesDestroySelectors = {
  selectLoading,
};

export default votesDestroySelectors;
