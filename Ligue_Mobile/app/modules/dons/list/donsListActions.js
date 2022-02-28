import DonsService from '../../dons/donsService';
import {Errors} from '@modules';
const prefix = 'DONS_LIST';
const donsListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  doFetch: () => async dispatch => {
    try {
      dispatch({
        type: donsListActions.FETCH_STARTED,
      });

      const response = await DonsService.listDons();

      dispatch({
        type: donsListActions.FETCH_SUCCESS,
        payload: response,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: donsListActions.FETCH_ERROR,
      });
    }
  },
};

export default donsListActions;
