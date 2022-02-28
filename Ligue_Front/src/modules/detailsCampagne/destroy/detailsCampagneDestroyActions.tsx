import listActions from 'src/modules/detailsCampagne/list/detailsCampagneListActions';
import DetailsCampagneService from 'src/modules/detailsCampagne/detailsCampagneService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DETAILSCAMPAGNE_DESTROY';

const detailsCampagneDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: detailsCampagneDestroyActions.DESTROY_STARTED,
      });

      await DetailsCampagneService.destroyAll([id]);

      dispatch({
        type: detailsCampagneDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.detailsCampagne.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/campagne');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: detailsCampagneDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: detailsCampagneDestroyActions.DESTROY_ALL_STARTED,
      });

      await DetailsCampagneService.destroyAll(ids);

      dispatch({
        type: detailsCampagneDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.detailsCampagne.destroyAll.success'),
      );

      getHistory().push('/campagne');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: detailsCampagneDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default detailsCampagneDestroyActions;
