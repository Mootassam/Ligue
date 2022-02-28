import { createSelector } from 'reselect';

import authSelectors from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import Permissions from 'src/security/permissions';

const selectRaw = (state) => state.settings;

const selectSettings = createSelector(
  [selectRaw],
  (raw) => raw.settings,
);

const selectInitLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.initLoading),
);

const selectSaveLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.saveLoading),
);

const selectPermissionToEdit = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.settingsEdit,
    ),
);

const settingsSelectors = {
  selectInitLoading,
  selectSaveLoading,
  selectSettings,
  selectPermissionToEdit,
  selectRaw,
};

export default settingsSelectors;
