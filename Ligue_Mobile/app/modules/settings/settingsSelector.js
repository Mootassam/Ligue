import {createSelector} from 'reselect';
const selectRaw = state => state.settingsReducers;
const selectDarkTheme = createSelector([selectRaw], raw => raw.force_dark);
const selectCurrency = createSelector([selectRaw], raw => raw.currency);
const settingsSelector = {selectDarkTheme, selectCurrency};

export default settingsSelector;
