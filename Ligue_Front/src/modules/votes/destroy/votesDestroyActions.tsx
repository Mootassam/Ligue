import listActions from 'src/modules/votes/list/votesListActions';
import VotesService from 'src/modules/votes/votesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'VOTES_DESTROY';

const votesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: votesDestroyActions.DESTROY_STARTED,
      });

      await VotesService.destroyAll([id]);

      dispatch({
        type: votesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.votes.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/projet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: votesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: votesDestroyActions.DESTROY_ALL_STARTED,
      });

      await VotesService.destroyAll(ids);

      dispatch({
        type: votesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.votes.destroyAll.success'),
      );

      getHistory().push('/projet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: votesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default votesDestroyActions;
