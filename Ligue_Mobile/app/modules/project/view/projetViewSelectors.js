import { createSelector } from "reselect";

const selectRaw = (state) => state.project.view;

const selectRows = createSelector([selectRaw], (raw) => raw.rows);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading)
);

const projetViewSelectors = {
  selectLoading,
  selectRows,
  selectRaw,
};

export default projetViewSelectors;
