import { createSelector } from 'reselect';

const selectRaw = (state) => state.commandLine.form;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectInitLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.initLoading),
);

const selectSaveLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.saveLoading),
);

const commandLineFormSelectors = {
  selectInitLoading,
  selectSaveLoading,
  selectRecord,
  selectRaw,
};

export default commandLineFormSelectors;