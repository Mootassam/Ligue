import DonsService from 'src/modules/dons/donsService';
import selectors from 'src/modules/dons/list/donsListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/dons/list/donsListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'DONS_LIST';

const donsListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doClearAllSelected() {
    return {
      type: donsListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: donsListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: donsListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: donsListActions.RESETED,
    });

    dispatch(donsListActions.doFetchUserDons());
  },
  doResetprojet: () => async (dispatch) => {
    dispatch({
      type: donsListActions.RESETED,
    });

    dispatch(donsListActions.doFetch());
  },


  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: donsListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await DonsService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.dons.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: donsListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: donsListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: donsListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(donsListActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: donsListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(donsListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(donsListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: donsListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await DonsService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: donsListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: donsListActions.FETCH_ERROR,
      });
    }
  },
  doFetchUserDons: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {

    try {
      dispatch({
        type: donsListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },

      }        
      );
     
      const response = await DonsService.UserDonslist(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: donsListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: donsListActions.FETCH_ERROR,
      });
    }
  },
};

export default donsListActions;
