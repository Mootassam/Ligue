import listActions from 'src/modules/commandLine/list/commandLineListActions';
import CommandLineService from 'src/modules/commandLine/commandLineService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COMMANDLINE_DESTROY';

const commandLineDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id, commandId) => async (dispatch) => {
    try {
      dispatch({
        type: commandLineDestroyActions.DESTROY_STARTED,
      });

      await CommandLineService.destroyAll([id]);

      dispatch({
        type: commandLineDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.commandLine.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/produit-commande/' + commandId + '/edit');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: commandLineDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: commandLineDestroyActions.DESTROY_ALL_STARTED,
      });

      await CommandLineService.destroyAll(ids);

      dispatch({
        type: commandLineDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.commandLine.destroyAll.success'),
      );

      getHistory().push('/command-line');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: commandLineDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default commandLineDestroyActions;
