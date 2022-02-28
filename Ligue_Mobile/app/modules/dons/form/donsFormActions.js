import DonsService from '../donsService';
import Errors from '../../shared/error/error';
import {Message} from '@shared';
import HistoriquePointsService from '../../historiquePoints/historiquePointsService';

const prefix = 'DONS_FORM';

const donsFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,
  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,
  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  PAYMEE_STEP1_STARTED: `PAYMEE_STEP1_STARTED`,
  PAYMEE_STEP1_SUCCESS: `PAYMEE_STEP1_SUCCESS`,
  PAYMEE_STEP1_ERROR: `PAYMEE_STEP1_ERROR`,

  PAYMEE_STEP3_STARTED: `PAYMEE_STEP3_STARTED`,
  PAYMEE_STEP3_SUCCES: `PAYMEE_STEP3_SUCCES`,
  PAYMEE_STEP3_ERROR: `PAYMEE_STEP3_ERROR`,

  doInit: id => async dispatch => {
    try {
      dispatch({
        type: donsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DonsService.find(id);
      }
      dispatch({
        type: donsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: donsFormActions.INIT_ERROR,
      });
    }
  },

  doCreate: values => async dispatch => {
    try {
      dispatch({
        type: donsFormActions.CREATE_STARTED,
      });
      await Promise.all([
        DonsService.create(values),
        HistoriquePointsService.create({...values, commentaire: 'Dons'}),
      ]);

      dispatch({
        type: donsFormActions.CREATE_SUCCESS,
      });
      Message.success('Dons enregistré avec succès');
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: donsFormActions.CREATE_ERROR,
      });
    }
  },

  Paymee_Step1: (values, method) => async dispatch => {
    try {
      dispatch({type: donsFormActions.PAYMEE_STEP1_STARTED});
      const record = await DonsService.paymee_step1(values.montant);
      dispatch({
        type: donsFormActions.PAYMEE_STEP1_SUCCESS,
        payload: {record, values},
      });
    } catch (error) {
      dispatch({type: donsFormActions.PAYMEE_STEP1_ERROR});
    }
  },
  Paymee_Step3: () => async dispatch => {
    try {
      dispatch({type: donsFormActions.PAYMEE_STEP3_STARTED});
      const record = await DonsService.paymee_step3();
      dispatch({type: donsFormActions.PAYMEE_STEP3_SUCCESS});
    } catch (error) {
      dispatch({type: donsFormActions.PAYMEE_STEP3_ERROR});
    }
  },
};

export default donsFormActions;
