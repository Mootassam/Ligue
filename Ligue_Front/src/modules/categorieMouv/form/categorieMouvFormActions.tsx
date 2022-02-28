import CategorieMouvService from 'src/modules/categorieMouv/categorieMouvService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CATEGORIEMOUV_FORM';

const categorieMouvFormActions = {
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
        type: categorieMouvFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CategorieMouvService.find(id);
      }

      dispatch({
        type: categorieMouvFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categorieMouvFormActions.INIT_ERROR,
      });

      getHistory().push('/categorie-mouv');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: categorieMouvFormActions.CREATE_STARTED,
      });

      await CategorieMouvService.create(values);

      dispatch({
        type: categorieMouvFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.categorieMouv.create.success'),
      );

      getHistory().push('/categorie-mouv');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categorieMouvFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: categorieMouvFormActions.UPDATE_STARTED,
      });

      await CategorieMouvService.update(id, values);

      dispatch({
        type: categorieMouvFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.categorieMouv.update.success'),
      );

      getHistory().push('/categorie-mouv');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categorieMouvFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default categorieMouvFormActions;
