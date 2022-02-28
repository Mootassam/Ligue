import ProjetService from '../projetService';
import selectors from './projetListSelectors';
import Errors from '../../shared/error/error';
const prefix = 'PROJET_LIST';

const projetListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,
  RESETED: `${prefix}_RESETED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  doClearAllSelected() {
    return {
      type: projetListActions.CLEAR_ALL_SELECTED,
    };
  },
  doReset: () => async dispatch => {
    dispatch({
      type: projetListActions.RESETED,
    });

    dispatch(projetListActions.doFetch());
  },

  doChangeSort: sorter => async (dispatch, getState) => {
    dispatch({
      type: projetListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(projetListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (dispatch, getState) => {
    const filter = selectors.selectFilter(getState());

    dispatch(projetListActions.doFetch(filter, true));
  },

  doFetch: (filter, keepPagination = false) => async (dispatch, getState) => {
    try {
      dispatch({
        type: projetListActions.FETCH_STARTED,
        payload: {filter, keepPagination},
      });

      const response = await ProjetService.list(
        filter,
        selectors.selectOrderBy(getState()),
      );

      dispatch({
        type: projetListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projetListActions.FETCH_ERROR,
      });
    }
  },
};

export default projetListActions;
