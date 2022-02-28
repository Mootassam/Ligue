import HistoriquePointsService from 'src/modules/historiquePoints/historiquePointsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'HISTORIQUEPOINTS_FORM';

const historiquePointsFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: historiquePointsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await HistoriquePointsService.find(id);
      }

      dispatch({
        type: historiquePointsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: historiquePointsFormActions.INIT_ERROR,
      });

      getHistory().push('/historique-points');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: historiquePointsFormActions.CREATE_STARTED,
      });

      await HistoriquePointsService.create(values);

      dispatch({
        type: historiquePointsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.historiquePoints.create.success'),
      );

      getHistory().push('/historique-points');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: historiquePointsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: historiquePointsFormActions.UPDATE_STARTED,
      });

      await HistoriquePointsService.update(id, values);

      dispatch({
        type: historiquePointsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.historiquePoints.update.success'),
      );

      getHistory().push('/historique-points');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: historiquePointsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default historiquePointsFormActions;
