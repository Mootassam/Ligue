import DonsService from 'src/modules/dons/donsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DONS_FORM';

const donsFormActions = {
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
        type: donsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DonsService.find(id);
      }

      dispatch({
        type: donsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: donsFormActions.INIT_ERROR,
      });

      getHistory().push('/projet');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: donsFormActions.CREATE_STARTED,
      });

      await DonsService.create(values);

      dispatch({
        type: donsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.dons.create.success'),
      );

      getHistory().push('/projet');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: donsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: donsFormActions.UPDATE_STARTED,
      });

      await DonsService.update(id, values);

      dispatch({
        type: donsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.dons.update.success'),
      );

      getHistory().push('/projet');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: donsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default donsFormActions;
