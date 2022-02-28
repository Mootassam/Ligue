import ProduitCategorieService from 'src/modules/produitCategorie/produitCategorieService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PRODUITCATEGORIE_FORM';

const produitCategorieFormActions = {
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
        type: produitCategorieFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProduitCategorieService.find(id);
      }

      dispatch({
        type: produitCategorieFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitCategorieFormActions.INIT_ERROR,
      });

      getHistory().push('/produit-categorie');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: produitCategorieFormActions.CREATE_STARTED,
      });

      await ProduitCategorieService.create(values);

      dispatch({
        type: produitCategorieFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.produitCategorie.create.success'),
      );

      getHistory().push('/produit-categorie');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitCategorieFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: produitCategorieFormActions.UPDATE_STARTED,
      });

      await ProduitCategorieService.update(id, values);

      dispatch({
        type: produitCategorieFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.produitCategorie.update.success'),
      );

      getHistory().push('/produit-categorie');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitCategorieFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default produitCategorieFormActions;
