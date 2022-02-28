import ProjetService from 'src/modules/projet/projetService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PROJET_FORM';

const projetFormActions = {
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
        type: projetFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProjetService.find(id);
      }

      dispatch({
        type: projetFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projetFormActions.INIT_ERROR,
      });

      getHistory().push('/projet');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: projetFormActions.CREATE_STARTED,
      });

      await ProjetService.create(values);

      dispatch({
        type: projetFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.projet.create.success'),
      );

      getHistory().push('/projet');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projetFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: projetFormActions.UPDATE_STARTED,
      });

      await ProjetService.update(id, values);

      dispatch({
        type: projetFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.projet.update.success'),
      );

      getHistory().push('/projet');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projetFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default projetFormActions;
