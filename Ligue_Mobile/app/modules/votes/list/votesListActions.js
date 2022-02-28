import VotesService from '../votesService';
import Errors from '../../shared/error/error';

const prefix = 'VOTES_LIST';

const votesListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  doFetch: () => async (dispatch, getState) => {
    try {
      dispatch({
        type: votesListActions.FETCH_STARTED,
      });
      const response = await VotesService.listVotes();
      dispatch({
        type: votesListActions.FETCH_SUCCESS,
        payload: response,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: votesListActions.FETCH_ERROR,
      });
    }
  },
};

export default votesListActions;
