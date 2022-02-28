import CategorieMouvService from 'src/modules/categorieMouv/categorieMouvService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CATEGORIEMOUV_VIEW';

const categorieMouvViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categorieMouvViewActions.FIND_STARTED,
      });

      const record = await CategorieMouvService.find(id);

      dispatch({
        type: categorieMouvViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categorieMouvViewActions.FIND_ERROR,
      });

      getHistory().push('/categorie-mouv');
    }
  },
};

export default categorieMouvViewActions;
