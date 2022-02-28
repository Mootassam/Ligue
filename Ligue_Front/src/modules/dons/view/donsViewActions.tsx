import DonsService from 'src/modules/dons/donsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DONS_VIEW';

const donsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: donsViewActions.FIND_STARTED,
      });

      const record = await DonsService.find(id);

      dispatch({
        type: donsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: donsViewActions.FIND_ERROR,
      });

      getHistory().push('/dons');
    }
  },
};

export default donsViewActions;
