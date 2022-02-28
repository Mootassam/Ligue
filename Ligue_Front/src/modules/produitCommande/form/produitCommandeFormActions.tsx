import ProduitCommandeService from 'src/modules/produitCommande/produitCommandeService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PRODUITCOMMANDE_FORM';

const produitCommandeFormActions = {
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
        type: produitCommandeFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProduitCommandeService.find(id);
      }

      dispatch({
        type: produitCommandeFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitCommandeFormActions.INIT_ERROR,
      });

      getHistory().push('/produit-commande');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: produitCommandeFormActions.CREATE_STARTED,
      });

      await ProduitCommandeService.create(values);

      dispatch({
        type: produitCommandeFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.produitCommande.create.success'),
      );

      getHistory().push('/produit-commande');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitCommandeFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: produitCommandeFormActions.UPDATE_STARTED,
      });

      await ProduitCommandeService.update(id, values);

      dispatch({
        type: produitCommandeFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.produitCommande.update.success'),
      );

      getHistory().push('/produit-commande');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitCommandeFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default produitCommandeFormActions;
