import actions from './settingsActions';

const initialState = {
  theme: null,
  font: null,
  force_dark: null,
  language: null,
  currency: '',
};

export default (state = initialState, {type, payload}) => {
  if (type === actions.CHANGE_THEME) {
    return {
      ...state,
      theme: payload,
    };
  }
  if (type === actions.CHANGE_FONT) {
    return {
      ...state,
      font: payload,
    };
  }
  if (type === actions.FORCE_APPEARANCE) {
    return {
      ...state,
      force_dark: payload,
    };
  }
  if (type === actions.CHANGE_LANGUAGE) {
    return {
      ...state,
      language: payload,
    };
  }
  if (type === actions.CHANGE_CURRENCY) {
    return {
      ...state,
      currency: payload,
    };
  }

  return state;
};
