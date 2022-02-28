import HistoriquePointsService from 'src/modules/historiquePoints/historiquePointsService';
import selectors from 'src/modules/historiquePoints/list/historiquePointsListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/historiquePoints/list/historiquePointsListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'HISTORIQUEPOINTS_LIST';

const historiquePointsListActions = {
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
      type: historiquePointsListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: historiquePointsListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: historiquePointsListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: historiquePointsListActions.RESETED,
    });

    dispatch(historiquePointsListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: historiquePointsListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await HistoriquePointsService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.historiquePoints.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: historiquePointsListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: historiquePointsListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: historiquePointsListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(historiquePointsListActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: historiquePointsListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(historiquePointsListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(historiquePointsListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: historiquePointsListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await HistoriquePointsService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: historiquePointsListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: historiquePointsListActions.FETCH_ERROR,
      });
    }
  },
  doFetchHistPoints: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: historiquePointsListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await HistoriquePointsService.listHistPoints(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: historiquePointsListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: historiquePointsListActions.FETCH_ERROR,
      });
    }
  },
};

export default historiquePointsListActions;
