import ProduitCategorieService from 'src/modules/produitCategorie/produitCategorieService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PRODUITCATEGORIE_VIEW';

const produitCategorieViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: produitCategorieViewActions.FIND_STARTED,
      });

      const record = await ProduitCategorieService.find(id);

      dispatch({
        type: produitCategorieViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: produitCategorieViewActions.FIND_ERROR,
      });

      getHistory().push('/produit-categorie');
    }
  },
};

export default produitCategorieViewActions;
