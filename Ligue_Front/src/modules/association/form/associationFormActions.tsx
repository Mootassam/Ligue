import AssociationService from 'src/modules/association/associationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ASSOCIATION_FORM';

const associationFormActions = {
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
        type: associationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AssociationService.find(id);
      }

      dispatch({
        type: associationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: associationFormActions.INIT_ERROR,
      });

      getHistory().push('/association');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: associationFormActions.CREATE_STARTED,
      });

      await AssociationService.create(values);

      dispatch({
        type: associationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.association.create.success'),
      );

      getHistory().push('/association');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: associationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: associationFormActions.UPDATE_STARTED,
      });

      await AssociationService.update(id, values);

      dispatch({
        type: associationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.association.update.success'),
      );

      getHistory().push('/association');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: associationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default associationFormActions;
