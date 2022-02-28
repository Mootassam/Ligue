import listActions from 'src/modules/produit/list/produitListActions';
import ProduitService from 'src/modules/produit/produitService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PRODUIT_DESTROY';

const produitDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: produitDestroyActions.DESTROY_STARTED,
      });

      await ProduitService.destroyAll([id]);

      dispatch({
        type: produitDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.produit.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/produit');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: produitDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: produitDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProduitService.destroyAll(ids);

      dispatch({
        type: produitDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.produit.destroyAll.success'),
      );

      getHistory().push('/produit');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: produitDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default produitDestroyActions;
