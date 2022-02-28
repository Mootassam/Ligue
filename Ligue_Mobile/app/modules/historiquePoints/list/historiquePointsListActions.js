import HistoriquePointsService from '../../historiquePoints/historiquePointsService';
import Errors from '../../shared/error/error';
const prefix = 'HISTORIQUEPOINTS_LIST';
const historiquePointsListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  doFetch: () => async (dispatch, getState) => {
    try {
      dispatch({
        type: historiquePointsListActions.FETCH_STARTED,
      });
      const response = await HistoriquePointsService.listGamifications();
      dispatch({
        type: historiquePointsListActions.FETCH_SUCCESS,
        payload: response,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: historiquePointsListActions.FETCH_ERROR,
      });
    }
  },
};

export default historiquePointsListActions;
