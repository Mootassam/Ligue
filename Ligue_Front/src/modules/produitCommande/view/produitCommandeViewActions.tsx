import ProduitCommandeService from 'src/modules/produitCommande/produitCommandeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PRODUITCOMMANDE_VIEW';

const produitCommandeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: produitCommandeViewActions.FIND_STARTED,
      });

      const record = await ProduitCommandeService.find(id);

      dispatch({
        type: produitCommandeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitCommandeViewActions.FIND_ERROR,
      });

      getHistory().push('/produit-commande');
    }
  },
};

export default produitCommandeViewActions;
