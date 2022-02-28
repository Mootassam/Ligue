import CommandLineService from 'src/modules/commandLine/commandLineService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COMMANDLINE_VIEW';

const commandLineViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: commandLineViewActions.FIND_STARTED,
      });

      const record = await CommandLineService.find(id);

      dispatch({
        type: commandLineViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: commandLineViewActions.FIND_ERROR,
      });

      getHistory().push('/command-line');
    }
  },
};

export default commandLineViewActions;
