import { createSelector } from 'reselect';

const selectRaw = (state) => state.association.form;

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

const associationFormSelectors = {
  selectInitLoading,
  selectSaveLoading,
  selectRecord,
  selectRaw,
};

export default associationFormSelectors;