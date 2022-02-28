import actions from './donsFormActions';

const initialData = {
  initLoading: false,
  saveLoading: false,
  paymentLoading: false,
  record: null,
  data: null,
  montant: null,
};

export default (state = initialData, {type, payload}) => {
  if (type === actions.CREATE_STARTED) {
    return {
      ...state,
      saveLoading: true,
    };
  }

  if (type === actions.CREATE_SUCCESS) {
    return {
      ...state,
      saveLoading: false,
    };
  }

  if (type === actions.CREATE_ERROR) {
    return {
      ...state,
      saveLoading: false,
    };
  }

  if (type === actions.PAYMEE_STEP1_ERROR) {
    return {...state, data: null, paymentLoading: true};
  }
  if (type === actions.PAYMEE_STEP1_SUCCESS) {
    return {
      ...state,
      data: payload.record.data,
      montant: payload.values.montant,
      paymentLoading: false,
    };
  }
  if (type === actions.PAYMEE_STEP1_ERROR) {
    return {...state, data: null, montant: 0, paymentLoading: false};
  }
  return state;
};
