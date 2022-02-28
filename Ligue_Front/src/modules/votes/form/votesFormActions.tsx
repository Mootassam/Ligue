import VotesService from 'src/modules/votes/votesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'VOTES_FORM';

const votesFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: votesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await VotesService.find(id);
      }

      dispatch({
        type: votesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: votesFormActions.INIT_ERROR,
      });

      getHistory().push('/votes');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: votesFormActions.CREATE_STARTED,
      });

      await VotesService.create(values);

      dispatch({
        type: votesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.votes.create.success'),
      );

      getHistory().push('/votes');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: votesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: votesFormActions.UPDATE_STARTED,
      });

      await VotesService.update(id, values);

      dispatch({
        type: votesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.votes.update.success'),
      );

      getHistory().goBack();
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: votesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default votesFormActions;
