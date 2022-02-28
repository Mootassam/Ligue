import ProduitService from 'src/modules/produit/produitService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PRODUIT_FORM';

const produitFormActions = {
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
        type: produitFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProduitService.find(id);
      }

      dispatch({
        type: produitFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitFormActions.INIT_ERROR,
      });

      getHistory().push('/produit');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: produitFormActions.CREATE_STARTED,
      });

      await ProduitService.create(values);

      dispatch({
        type: produitFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.produit.create.success'),
      );

      getHistory().push('/produit');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: produitFormActions.UPDATE_STARTED,
      });

      await ProduitService.update(id, values);

      dispatch({
        type: produitFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.produit.update.success'),
      );

      getHistory().push('/produit');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default produitFormActions;
