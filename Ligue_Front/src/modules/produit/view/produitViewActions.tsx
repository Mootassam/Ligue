import ProduitService from 'src/modules/produit/produitService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PRODUIT_VIEW';

const produitViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: produitViewActions.FIND_STARTED,
      });

      const record = await ProduitService.find(id);

      dispatch({
        type: produitViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitViewActions.FIND_ERROR,
      });

      getHistory().push('/produit');
    }
  },
};

export default produitViewActions;
