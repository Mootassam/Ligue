import MandatService from 'src/modules/mandat/mandatService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MANDAT_VIEW';

const mandatViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mandatViewActions.FIND_STARTED,
      });

      const record = await MandatService.find(id);

      dispatch({
        type: mandatViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mandatViewActions.FIND_ERROR,
      });

      getHistory().push('/mandat');
    }
  },
};

export default mandatViewActions;
