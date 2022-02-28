import {createSelector} from 'reselect';

const selectRaw = state => state.project.list;

const selectLoading = createSelector([selectRaw], raw => raw.loading);

const selectRows = createSelector([selectRaw], raw => raw.rows);

const selectCount = createSelector([selectRaw], raw => raw.count);

const selectHasRows = createSelector([selectCount], count => count > 0);

const selectOrderBy = createSelector([selectRaw], raw => {
  const sorter = raw.sorter;

  if (!sorter) {
    return null;
  }

  if (!sorter.field) {
    return null;
  }

  let direction = sorter.order === 'descend' ? 'DESC' : 'ASC';

  return `${sorter.field}_${direction}`;
});
const selectFilter = createSelector([selectRaw], raw => {
  return raw.filter;
});
const projetListSelectors = {
  selectFilter,
  selectLoading,
  selectRows,
  selectCount,
  selectHasRows,
  selectOrderBy,
};

export default projetListSelectors;
