import { createSelector } from 'reselect';

const selectRaw = (state) => state.detailsCampagne.form;

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

const detailsCampagneFormSelectors = {
  selectInitLoading,
  selectSaveLoading,
  selectRecord,
  selectRaw,
};

export default detailsCampagneFormSelectors;