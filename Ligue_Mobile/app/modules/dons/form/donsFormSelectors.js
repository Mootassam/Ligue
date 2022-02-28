import {createSelector} from 'reselect';

const selectRaw = state => state.dons.form;

const selectRecord = createSelector([selectRaw], raw => raw.record);

const selectInitLoading = createSelector([selectRaw], raw =>
  Boolean(raw.initLoading),
);

const selectSaveLoading = createSelector([selectRaw], raw =>
  Boolean(raw.saveLoading),
);
const selectData = createSelector([selectRaw], res => res.data);

const selectLoading = createSelector([selectRaw], loading =>
  Boolean(loading.paymentLoading),
);
const selectMontant = createSelector([selectRaw], raw => raw.montant);
const donsFormSelectors = {
  selectLoading,
  selectData,
  selectInitLoading,
  selectSaveLoading,
  selectRecord,
  selectMontant,
  selectRaw,
};

export default donsFormSelectors;
