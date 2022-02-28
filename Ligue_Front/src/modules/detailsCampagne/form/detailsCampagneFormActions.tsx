import DetailsCampagneService from 'src/modules/detailsCampagne/detailsCampagneService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DETAILSCAMPAGNE_FORM';

const detailsCampagneFormActions = {
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
        type: detailsCampagneFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DetailsCampagneService.find(id);
      }

      dispatch({
        type: detailsCampagneFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: detailsCampagneFormActions.INIT_ERROR,
      });

      getHistory().push('/campagne');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: detailsCampagneFormActions.CREATE_STARTED,
      });

      await DetailsCampagneService.create(values);

      dispatch({
        type: detailsCampagneFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.detailsCampagne.create.success'),
      );

      getHistory().push('/campagne');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: detailsCampagneFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: detailsCampagneFormActions.UPDATE_STARTED,
      });

      await DetailsCampagneService.update(id, values);

      dispatch({
        type: detailsCampagneFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.detailsCampagne.update.success'),
      );

      getHistory().push('/campagne');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: detailsCampagneFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default detailsCampagneFormActions;
