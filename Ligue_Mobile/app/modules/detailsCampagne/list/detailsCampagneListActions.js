import DetailsCampagneService from '../detailsCampagneService';

import Errors from '../../shared/error/error';

const prefix = 'DETAILSCAMPAGNE_LIST';

const detailsCampagneListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  doFetch: () => async dispatch => {
    try {
      dispatch({
        type: detailsCampagneListActions.FETCH_STARTED,
      });
      const response = await DetailsCampagneService.listAdhesionss();
      dispatch({
        type: detailsCampagneListActions.FETCH_SUCCESS,
        payload: response,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: detailsCampagneListActions.FETCH_ERROR,
      });
    }
  },
};

export default detailsCampagneListActions;
