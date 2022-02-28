import { createSelector } from "reselect";

const selectRaw = (state) => state.produitCommande.list;

const selectLoading = createSelector([selectRaw], (raw) => raw.loading);

const selectRows = createSelector([selectRaw], (raw) => raw.rows);

const produitCommandeListSelectors = {
  selectLoading,
  selectRows,
};

export default produitCommandeListSelectors;
