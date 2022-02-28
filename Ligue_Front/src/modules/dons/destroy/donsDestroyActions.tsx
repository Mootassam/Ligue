import listActions from 'src/modules/dons/list/donsListActions';
import DonsService from 'src/modules/dons/donsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DONS_DESTROY';

const donsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: donsDestroyActions.DESTROY_STARTED,
      });

      await DonsService.destroyAll([id]);

      dispatch({
        type: donsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.dons.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/projet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: donsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: donsDestroyActions.DESTROY_ALL_STARTED,
      });

      await DonsService.destroyAll(ids);

      dispatch({
        type: donsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.dons.destroyAll.success'),
      );

      getHistory().push('/projet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: donsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default donsDestroyActions;
