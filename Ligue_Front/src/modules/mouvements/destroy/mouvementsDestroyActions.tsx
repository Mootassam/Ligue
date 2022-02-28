import listActions from 'src/modules/mouvements/list/mouvementsListActions';
import MouvementsService from 'src/modules/mouvements/mouvementsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MOUVEMENTS_DESTROY';

const mouvementsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mouvementsDestroyActions.DESTROY_STARTED,
      });

      await MouvementsService.destroyAll([id]);

      dispatch({
        type: mouvementsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.mouvements.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/mouvements');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: mouvementsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: mouvementsDestroyActions.DESTROY_ALL_STARTED,
      });

      await MouvementsService.destroyAll(ids);

      dispatch({
        type: mouvementsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.mouvements.destroyAll.success'),
      );

      getHistory().push('/mouvements');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: mouvementsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default mouvementsDestroyActions;
