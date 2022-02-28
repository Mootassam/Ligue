import DetailsCampagneService from 'src/modules/detailsCampagne/detailsCampagneService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DETAILSCAMPAGNE_VIEW';

const detailsCampagneViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: detailsCampagneViewActions.FIND_STARTED,
      });

      const record = await DetailsCampagneService.find(id);

      dispatch({
        type: detailsCampagneViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: detailsCampagneViewActions.FIND_ERROR,
      });

      getHistory().push('/details-campagne');
    }
  },
};

export default detailsCampagneViewActions;
