import listActions from 'src/modules/produitCommande/list/produitCommandeListActions';
import ProduitCommandeService from 'src/modules/produitCommande/produitCommandeService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PRODUITCOMMANDE_DESTROY';

const produitCommandeDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: produitCommandeDestroyActions.DESTROY_STARTED,
      });

      await ProduitCommandeService.destroyAll([id]);

      dispatch({
        type: produitCommandeDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.produitCommande.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/produit-commande');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: produitCommandeDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: produitCommandeDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProduitCommandeService.destroyAll(ids);

      dispatch({
        type: produitCommandeDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.produitCommande.destroyAll.success'),
      );

      getHistory().push('/produit-commande');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: produitCommandeDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default produitCommandeDestroyActions;
