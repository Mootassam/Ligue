import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import campagneSelectors from 'src/modules/campagne/campagneSelectors';
import destroyActions from 'src/modules/campagne/destroy/campagneDestroyActions';
import destroySelectors from 'src/modules/campagne/destroy/campagneDestroySelectors';
import actions from 'src/modules/campagne/list/campagneListActions';
import selectors from 'src/modules/campagne/list/campagneListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import { useForm } from 'react-hook-form';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import DetailsCampagneFormModal from 'src/view/detailsCampagne/form/DetailsCampagneFormModal';
import moment from 'moment';


function CampagneListTable(props) {
  const { setValue, getValues } = useForm();
  const [
    recordIdcampagne,
    setRecordIdcampagne,
  ] = useState(null);
  const [
    recordTitrecampagne,
    setRecordTitrecampagne,
  ] = useState(null);
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  let idcampagne;
  const dispatch = useDispatch();
  const doCloseModal = () => {
    setModalVisible(false);
  };

  const doOpenModal = (id, titre) => {
    idcampagne = id;
    setRecordIdcampagne(id);
    titre = titre;
    setRecordTitrecampagne(titre);
    setModalVisible(true);
  };

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
    campagneSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    campagneSelectors.selectPermissionToDestroy,
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
  const hasPermissionToCreate = useSelector(
    campagneSelectors.selectPermissionToCreate,
  );

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };
  const doCreateSuccess = (record) => {
    const { name, mode } = props;
    if (mode && mode === 'multiple') {
      setValue(name, [
        ...(getValues()[name] || []),
        record,
        props.idcampagne,
        props.titre


      ]);
    } else {
      setValue(name, [
        record,
        props.idcampagne,
        props.titre,
      ]);
    }

    doCloseModal();
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
                  'entities.campagne.fields.titre',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'annee'}
                label={i18n(
                  'entities.campagne.fields.annee',
                )}
                align="right"
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'datedebut'}
                label={i18n(
                  'entities.campagne.fields.datedebut',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'datefin'}
                label={i18n(
                  'entities.campagne.fields.datefin',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'statut'}
                label={i18n(
                  'entities.campagne.fields.statut',
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
                  <td style={{ textAlign: 'right' }}>{row.annee}</td>
                  <td>{moment(row.datedebut).format('DD-MM-YYYY',)}</td>
                  <td>{moment(row.datefin).format('DD-MM-YYYY',)}</td>
                  <td>
                    {row.statut
                      ? i18n(
                        `entities.campagne.enumerators.statut.${row.statut}`,
                      )
                      : null}
                  </td>
                  <td className="td-actions">
                    {hasPermissionToCreate && (
                      <Link
                        className="btn btn-link"

                        onClick={() => { doOpenModal(row.id, row.titre) }
                        }>
                        {i18n('entities.detailsCampagne.new.title')}
                      </Link>)}
                    <Link
                      className="btn btn-link"
                      // to={{
                      //   pathname: '/details-campagne',
                      //   state: { idcampagne: row.id, titre: row.titre }
                      // }}
                      to={`/campagne/${row.id}`}
                    >
                      {i18n('common.view')}
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/campagne/${row.id}/edit`}
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
      {modalVisible && (
        <DetailsCampagneFormModal
          onClose={doCloseModal}
          onSuccess={doCreateSuccess}
          recordIdcampagne={recordIdcampagne}
          recordTitrecampagne={recordTitrecampagne}

        />
      )}
      {recordIdToDestroy && (
        <ConfirmModal
          title={`Êtes-vous sûr de supprimer?
            Les données relatives à la campagne seront supprimées aussi,
            cette action est irréversible.`}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </TableWrapper>
  );
}

export default CampagneListTable;