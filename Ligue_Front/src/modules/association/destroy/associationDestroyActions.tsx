import listActions from 'src/modules/association/list/associationListActions';
import AssociationService from 'src/modules/association/associationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ASSOCIATION_DESTROY';

const associationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: associationDestroyActions.DESTROY_STARTED,
      });

      await AssociationService.destroyAll([id]);

      dispatch({
        type: associationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.association.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/association');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: associationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: associationDestroyActions.DESTROY_ALL_STARTED,
      });

      await AssociationService.destroyAll(ids);

      dispatch({
        type: associationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.association.destroyAll.success'),
      );

      getHistory().push('/association');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: associationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default associationDestroyActions;
