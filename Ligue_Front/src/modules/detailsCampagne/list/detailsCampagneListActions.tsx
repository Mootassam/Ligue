import DetailsCampagneService from 'src/modules/detailsCampagne/detailsCampagneService';
import selectors from 'src/modules/detailsCampagne/list/detailsCampagneListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/detailsCampagne/list/detailsCampagneListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'DETAILSCAMPAGNE_LIST';

const detailsCampagneListActions = {
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
      type: detailsCampagneListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: detailsCampagneListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: detailsCampagneListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: detailsCampagneListActions.RESETED,
    });

    dispatch(detailsCampagneListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: detailsCampagneListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await DetailsCampagneService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.detailsCampagne.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: detailsCampagneListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: detailsCampagneListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: detailsCampagneListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(detailsCampagneListActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: detailsCampagneListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(detailsCampagneListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(detailsCampagneListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: detailsCampagneListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await DetailsCampagneService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: detailsCampagneListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: detailsCampagneListActions.FETCH_ERROR,
      });
    }
  },
  doFetch_adhesion: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: detailsCampagneListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await DetailsCampagneService.listAdhesion(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: detailsCampagneListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: detailsCampagneListActions.FETCH_ERROR,
      });
    }
  },
};

export default detailsCampagneListActions;
