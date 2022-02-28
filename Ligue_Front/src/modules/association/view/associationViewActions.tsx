import AssociationService from 'src/modules/association/associationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ASSOCIATION_VIEW';

const associationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: associationViewActions.FIND_STARTED,
      });

      const record = await AssociationService.find(id);

      dispatch({
        type: associationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: associationViewActions.FIND_ERROR,
      });

      getHistory().push('/association');
    }
  },
};

export default associationViewActions;
