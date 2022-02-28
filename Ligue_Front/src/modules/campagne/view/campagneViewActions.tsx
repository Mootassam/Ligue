import CampagneService from 'src/modules/campagne/campagneService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CAMPAGNE_VIEW';

const campagneViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: campagneViewActions.FIND_STARTED,
      });

      const record = await CampagneService.find(id);

      dispatch({
        type: campagneViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: campagneViewActions.FIND_ERROR,
      });

      getHistory().push('/campagne');
    }
  },
};

export default campagneViewActions;
