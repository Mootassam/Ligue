import VotesService from 'src/modules/votes/votesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'VOTES_VIEW';

const votesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: votesViewActions.FIND_STARTED,
      });

      const record = await VotesService.find(id);

      dispatch({
        type: votesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: votesViewActions.FIND_ERROR,
      });

      getHistory().push('/votes');
    }
  },
};

export default votesViewActions;
