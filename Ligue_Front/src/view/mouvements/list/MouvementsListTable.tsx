import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import mouvementsSelectors from 'src/modules/mouvements/mouvementsSelectors';
import destroyActions from 'src/modules/mouvements/destroy/mouvementsDestroyActions';
import destroySelectors from 'src/modules/mouvements/destroy/mouvementsDestroySelectors';
import actions from 'src/modules/mouvements/list/mouvementsListActions';
import selectors from 'src/modules/mouvements/list/mouvementsListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import FilesListView from 'src/view/shared/table/FileListView';
import CategorieMouvListItem from 'src/view/categorieMouv/list/CategorieMouvListItem';

function MouvementsListTable(props) {
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    mouvementsSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    mouvementsSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <TableWrapper>
      <div className="table-responsive">
        <table className="table table-striped     mt-2">
          <thead className="thead">
            <tr>
              <TableColumnHeader className="th-checkbox">
                {hasRows && (
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="table-header-checkbox"
                      checked={Boolean(isAllSelected)}
                      onChange={() => doToggleAllSelected()}
                    />
                    <label
                      htmlFor="table-header-checkbox"
                      className="custom-control-label"
                    >
                      &#160;
                    </label>
                  </div>
                )}
              </TableColumnHeader>
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'typeMouv'}
                  label={i18n(
                    'entities.mouvements.fields.typeMouv',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.mouvements.fields.categorie',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'titre'}
                  label={i18n(
                    'entities.mouvements.fields.titre',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'montant'}
                  label={i18n(
                    'entities.mouvements.fields.montant',
                  )}
                  align="right"
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.mouvements.fields.attachements',
                  )}
                />
              <TableColumnHeader className="th-actions" />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="d-flex justify-content-center">
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row) => (
                <tr key={row.id}>
                  <th className="th-checkbox" scope="row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={`table-header-checkbox-${row.id}`}
                        checked={selectedKeys.includes(
                          row.id,
                        )}
                        onChange={() =>
                          doToggleOneSelected(row.id)
                        }
                      />
                      <label
                        htmlFor={`table-header-checkbox-${row.id}`}
                        className="custom-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  </th>
                  <td>
                    {row.typeMouv
                      ? i18n(
                          `entities.mouvements.enumerators.typeMouv.${row.typeMouv}`,
                        )
                      : null}
                  </td>
                  <td>
                    <CategorieMouvListItem value={row.categorie} />
                  </td>
                  <td>{row.titre}</td>
                  <td style={{ textAlign: 'right' }}>
                    {row.montant}
                  </td>
                  <td>
                    <FilesListView
                      value={row.attachements}
                    />
                  </td>
                  <td className="td-actions">
                    <Link
                      className="btn btn-link"
                      to={`/mouvements/${row.id}`}
                    >
                      {i18n('common.view')}
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/mouvements/${row.id}/edit`}
                      >
                        {i18n('common.edit')}
                      </Link>
                    )}
                    {hasPermissionToDestroy && (
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() =>
                          doOpenDestroyConfirmModal(row.id)
                        }
                      >
                        {i18n('common.destroy')}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
      />

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </TableWrapper>
  );
}

export default MouvementsListTable;
