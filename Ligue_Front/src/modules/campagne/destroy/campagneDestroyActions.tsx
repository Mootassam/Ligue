import listActions from 'src/modules/campagne/list/campagneListActions';
import CampagneService from 'src/modules/campagne/campagneService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CAMPAGNE_DESTROY';

const campagneDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: campagneDestroyActions.DESTROY_STARTED,
      });

      await CampagneService.destroyAll([id]);

      dispatch({
        type: campagneDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.campagne.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/campagne');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: campagneDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: campagneDestroyActions.DESTROY_ALL_STARTED,
      });

      await CampagneService.destroyAll(ids);

      dispatch({
        type: campagneDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.campagne.destroyAll.success'),
      );

      getHistory().push('/campagne');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: campagneDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default campagneDestroyActions;
