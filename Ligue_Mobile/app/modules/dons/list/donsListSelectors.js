import {createSelector} from 'reselect';

const selectRaw = state => state.dons.list;

const selectLoading = createSelector([selectRaw], raw => raw.loading);

const selectRows = createSelector([selectRaw], raw => raw.rows);
const selectCount = createSelector([selectRaw], raw => raw.count);
const selectHasRows = createSelector([selectCount], count => count > 0);
const donsListSelectors = {
  selectLoading,
  selectRows,
  selectCount,
  selectHasRows,
};

export default donsListSelectors;
