import ProduitCommandeService from "../produitCommandeService";
import Errors from "../../shared/error/error";

const prefix = "PRODUITCOMMANDE_LIST";

const produitCommandeListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  doFetch: () => async (dispatch) => {
    try {
      dispatch({
        type: produitCommandeListActions.FETCH_STARTED,
      });
      const response = await ProduitCommandeService.listAchat();
      dispatch({
        type: produitCommandeListActions.FETCH_SUCCESS,
        payload: response.record,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: produitCommandeListActions.FETCH_ERROR,
      });
    }
  },
};

export default produitCommandeListActions;
