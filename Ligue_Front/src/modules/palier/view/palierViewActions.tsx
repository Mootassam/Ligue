import PalierService from 'src/modules/palier/palierService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PALIER_VIEW';

const palierViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: palierViewActions.FIND_STARTED,
      });

      const record = await PalierService.find(id);

      dispatch({
        type: palierViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: palierViewActions.FIND_ERROR,
      });

      getHistory().push('/palier');
    }
  },
};

export default palierViewActions;
