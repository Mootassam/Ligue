import HistoriquePointsService from 'src/modules/historiquePoints/historiquePointsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'HISTORIQUEPOINTS_VIEW';

const historiquePointsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: historiquePointsViewActions.FIND_STARTED,
      });

      const record = await HistoriquePointsService.find(id);

      dispatch({
        type: historiquePointsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: historiquePointsViewActions.FIND_ERROR,
      });

      getHistory().push('/historique-points');
    }
  },
};

export default historiquePointsViewActions;
