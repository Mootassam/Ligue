import ProjetService from 'src/modules/projet/projetService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PROJET_VIEW';

const projetViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: projetViewActions.FIND_STARTED,
      });

      const record = await ProjetService.find(id);

      dispatch({
        type: projetViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projetViewActions.FIND_ERROR,
      });

      getHistory().push('/projet');
    }
  },
};

export default projetViewActions;
