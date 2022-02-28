import listActions from 'src/modules/produitCategorie/list/produitCategorieListActions';
import ProduitCategorieService from 'src/modules/produitCategorie/produitCategorieService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PRODUITCATEGORIE_DESTROY';

const produitCategorieDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: produitCategorieDestroyActions.DESTROY_STARTED,
      });

      await ProduitCategorieService.destroyAll([id]);

      dispatch({
        type: produitCategorieDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.produitCategorie.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/produit-categorie');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: produitCategorieDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: produitCategorieDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProduitCategorieService.destroyAll(ids);

      dispatch({
        type: produitCategorieDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.produitCategorie.destroyAll.success'),
      );

      getHistory().push('/produit-categorie');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: produitCategorieDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default produitCategorieDestroyActions;
