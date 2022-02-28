import CampagneService from 'src/modules/campagne/campagneService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CAMPAGNE_FORM';

const campagneFormActions = {
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
        type: campagneFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CampagneService.find(id);
      }

      dispatch({
        type: campagneFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: campagneFormActions.INIT_ERROR,
      });

      getHistory().push('/details-campagne');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: campagneFormActions.CREATE_STARTED,
      });

      await CampagneService.create(values);

      dispatch({
        type: campagneFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.campagne.create.success'),
      );

      getHistory().push('/campagne');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: campagneFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: campagneFormActions.UPDATE_STARTED,
      });

      await CampagneService.update(id, values);

      dispatch({
        type: campagneFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.campagne.update.success'),
      );

      getHistory().push('/campagne');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: campagneFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default campagneFormActions;
