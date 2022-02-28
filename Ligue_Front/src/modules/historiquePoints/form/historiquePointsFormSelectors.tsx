import { createSelector } from 'reselect';

const selectRaw = (state) => state.historiquePoints.form;

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

const historiquePointsFormSelectors = {
  selectInitLoading,
  selectSaveLoading,
  selectRecord,
  selectRaw,
};

export default historiquePointsFormSelectors;