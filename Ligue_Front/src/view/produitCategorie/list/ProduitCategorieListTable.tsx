import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import produitCategorieSelectors from 'src/modules/produitCategorie/produitCategorieSelectors';
import destroyActions from 'src/modules/produitCategorie/destroy/produitCategorieDestroyActions';
import destroySelectors from 'src/modules/produitCategorie/destroy/produitCategorieDestroySelectors';
import actions from 'src/modules/produitCategorie/list/produitCategorieListActions';
import selectors from 'src/modules/produitCategorie/list/produitCategorieListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import ProduitViewItem from 'src/view/produit/view/ProduitViewItem';


function ProduitCategorieListTable(props) {
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
    produitCategorieSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    produitCategorieSelectors.selectPermissionToDestroy,
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
                name={'titre'}
                label={i18n(
                  'entities.produitCategorie.fields.titre',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'produit'}
                label={i18n(
                  'entities.produit.name',
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
                  <td>{row.titre}</td>
                  <td><ProduitViewItem
                    value={row.produit}
                  /></td>
                  <td className="td-actions">
                    <Link
                      className="btn btn-link"
                      to={`/produit-categorie/${row.id}`}
                    >
                      {i18n('common.view')}
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/produit-categorie/${row.id}/edit`}
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

export default ProduitCategorieListTable;
