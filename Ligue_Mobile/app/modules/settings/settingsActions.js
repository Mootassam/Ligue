const prefix = 'SETTINGS';

const settingsActions = {
  CHANGE_THEME: `${prefix}_CHANGE_THEME`,
  FORCE_APPEARANCE: `${prefix}_FORCE_APPEARANCE`,
  CHANGE_LANGUAGE: `${prefix}_CHANGE_LANGUAGE`,
  CHANGE_FONT: `${prefix}_CHANGE_FONT`,
  CHANGE_CURRENCY: `${prefix}_CHANGE_CURRENCY`,
  onChangeTheme: theme => async dispatch => {
    dispatch({
      type: settingsActions.CHANGE_THEME,
      payload: theme,
    });
  },

  onForceTheme: force_dark => async dispatch => {
    dispatch({
      type: settingsActions.FORCE_APPEARANCE,
      payload: force_dark,
    });
  },

  onChangeFont: font => async dispatch => {
    dispatch({
      type: settingsActions.CHANGE_FONT,
      payload: font,
    });
  },

  onChangeLanguage: language => async dispatch => {
    dispatch({
      type: settingsActions.CHANGE_LANGUAGE,
      payload: language,
    });
  },

  onChangeCurrency: currency => async dispatch => {
    dispatch({
      type: settingsActions.CHANGE_CURRENCY,
      payload: currency,
    });
  },
};

export default settingsActions;
