import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import categorieMouvSelectors from 'src/modules/categorieMouv/categorieMouvSelectors';
import destroyActions from 'src/modules/categorieMouv/destroy/categorieMouvDestroyActions';
import destroySelectors from 'src/modules/categorieMouv/destroy/categorieMouvDestroySelectors';
import actions from 'src/modules/categorieMouv/list/categorieMouvListActions';
import selectors from 'src/modules/categorieMouv/list/categorieMouvListSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ReactTooltip from 'react-tooltip';

function CategorieMouvToolbar(props) {
  const [
    destroyAllConfirmVisible,
    setDestroyAllConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToDestroy = useSelector(
    categorieMouvSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    categorieMouvSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    categorieMouvSelectors.selectPermissionToImport,
  );

  const doOpenDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(true);
  };

  const doCloseDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(false);
  };

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    doCloseDestroyAllConfirmModal();

    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;

    const button = (
      <button
        className="btn btn-light"
        disabled={disabled}
        onClick={doExport}
        type="button"
      >
        <ButtonIcon
          loading={exportLoading}
          iconClass="far fa-file-excel"
        />{' '}
        {i18n('common.export')}
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.noDataToExport')}
          data-tip-disable={!disabled}
          data-for="categorie-mouv-list-toolbar-export-tooltip"
        >
          {button}
          <ReactTooltip id="categorie-mouv-list-toolbar-export-tooltip" />
        </span>
      );
    }

    return button;
  };

  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <button
        disabled={disabled}
        className="btn btn-primary"
        type="button"
        onClick={doOpenDestroyAllConfirmModal}
      >
        <ButtonIcon
          loading={destroyLoading}
          iconClass="far fa-trash-alt"
        />{' '}
        {i18n('common.destroy')}
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.mustSelectARow')}
          data-tip-disable={!disabled}
          data-for="categorie-mouv-list-toolbar-destroy-tooltip"
        >
          {button}
          <ReactTooltip id="categorie-mouv-list-toolbar-destroy-tooltip" />
        </span>
      );
    }

    return button;
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link to="/categorie-mouv/new">
          <button className="btn btn-primary" type="button">
            <ButtonIcon iconClass="fas fa-plus" />{' '}
            {i18n('common.new')}
          </button>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/categorie-mouv/importer">
          <button className="btn btn-primary" type="button">
            <ButtonIcon iconClass="fas fa-upload" />{' '}
            {i18n('common.import')}
          </button>
        </Link>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=categorieMouv">
          <button className="btn btn-light" type="button">
            <ButtonIcon iconClass="fas fa-history" />{' '}
            {i18n('auditLog.menu')}
          </button>
        </Link>
      )}

      {renderExportButton()}

      {destroyAllConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroyAllSelected()}
          onClose={() => doCloseDestroyAllConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </Toolbar>
  );
}

export default CategorieMouvToolbar;
