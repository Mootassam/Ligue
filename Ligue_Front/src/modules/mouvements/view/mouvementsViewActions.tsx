import MouvementsService from 'src/modules/mouvements/mouvementsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MOUVEMENTS_VIEW';

const mouvementsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mouvementsViewActions.FIND_STARTED,
      });

      const record = await MouvementsService.find(id);

      dispatch({
        type: mouvementsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mouvementsViewActions.FIND_ERROR,
      });

      getHistory().push('/mouvements');
    }
  },
};

export default mouvementsViewActions;
