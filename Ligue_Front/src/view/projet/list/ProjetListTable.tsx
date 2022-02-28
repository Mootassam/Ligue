import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import projetSelectors from 'src/modules/projet/projetSelectors';
import destroyActions from 'src/modules/projet/destroy/projetDestroyActions';
import destroySelectors from 'src/modules/projet/destroy/projetDestroySelectors';
import actions from 'src/modules/projet/list/projetListActions';
import selectors from 'src/modules/projet/list/projetListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import FilesListView from 'src/view/shared/table/FileListView';
import DonsFormModal from 'src/view/dons/form/DonsFormModal';
import VotesFormModal from 'src/view/votes/form/VotesFormModal';
import { useForm } from 'react-hook-form';


function ProjetListTable(props) {
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const [
    recordIdprojet,
    setRecordIdprojet,
  ] = useState(null);
  const [
    recordIdtitre,
    setRecordIdtitre,
  ] = useState(null);
  const { setValue, getValues } = useForm();
  const [modalDonsVisible, setModalDonsVisible] = useState<boolean>(false);
  const [modalVotesVisible, setModalVotesVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const doCloseDonsModal = () => {
    setModalDonsVisible(false);
  };
  const doCloseVotesModal = () => {
    setModalVotesVisible(false);
  };
  let idprojet;
  let titre;

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const hasPermissionToCreate = useSelector(
    projetSelectors.selectPermissionToCreate,
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
    projetSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    projetSelectors.selectPermissionToDestroy,
  );


  const doOpenModalDons = (id, titre) => {
    idprojet = id;
    setRecordIdprojet(id);
    titre = titre;
    setRecordIdtitre(titre);
    setModalDonsVisible(true);
  };
  const doOpenModalVotes = (id, titre) => {
    idprojet = id;
    setRecordIdprojet(id);
    titre = titre;
    setRecordIdtitre(titre);
    setModalVotesVisible(true);
  };

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

  const doCreateDonsSuccess = (record) => {
    const { name, mode } = props;
    if (mode && mode === 'multiple') {
      setValue(name, [
        ...(getValues()[name] || []),
        record,
        props.idprojet,
        props.titre,
      ]);
    } else {
      setValue(name, [
        record,
        props.idprojet,
        props.titre,
      ]);
    }

    doCloseDonsModal();
  };
  const doCreateVotesSuccess = (record) => {
    const { name, mode } = props;
    if (mode && mode === 'multiple') {
      setValue(name, [
        ...(getValues()[name] || []),
        record,
        props.idprojet,
        props.titre,
      ]);
    } else {
      setValue(name, [
        record,
        props.idprojet,
        props.titre,
      ]);
    }

    doCloseVotesModal();
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
                  'entities.projet.fields.titre',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'typeProjet'}
                label={i18n(
                  'entities.projet.fields.typeProjet',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'statutProjet'}
                label={i18n(
                  'entities.projet.fields.statutProjet',
                )}
              />
              <TableColumnHeader
                label={i18n(
                  'entities.projet.fields.attachements',
                )}
              />
              <TableColumnHeader
                label={i18n(
                  'entities.projet.fields.budget',
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
                  <td>
                    {row.typeProjet
                      ? i18n(
                        `entities.projet.enumerators.typeProjet.${row.typeProjet}`,
                      )
                      : null}
                  </td>
                  <td>
                    {row.statutProjet
                      ? i18n(
                        `entities.projet.enumerators.statutProjet.${row.statutProjet}`,
                      )
                      : null}
                  </td>
                  <td>
                    <FilesListView
                      value={row.attachements}
                    />
                  </td>
                  <td>{row.budget}</td>
                  <td className="td-actions">
                    {hasPermissionToCreate && (
                      <Link
                        className="btn btn-link"
                        onClick={() => { doOpenModalVotes(row.id, row.titre) }
                        }>
                        {i18n('Votes')}
                      </Link>)}
                    {hasPermissionToCreate && (
                      <Link
                        className="btn btn-link"
                        onClick={() => { doOpenModalDons(row.id, row.titre) }
                        }>
                        {i18n('Dons')}
                      </Link>)}
                    <Link
                      className="btn btn-link"
                      to={{
                        pathname: `/projet/${row.id}`,
                        state: { idprojet: row.id }
                      }}
                    >
                      {i18n('common.view')}
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/projet/${row.id}/edit`}
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
      {modalDonsVisible && (
        <DonsFormModal
          onClose={doCloseDonsModal}
          onSuccess={doCreateDonsSuccess}
          recordIdprojet={recordIdprojet}
          recordIdtitre={recordIdtitre}
        />
      )}
      {modalVotesVisible && (
        <VotesFormModal
          onClose={doCloseVotesModal}
          onSuccess={doCreateVotesSuccess}
          recordIdprojet={recordIdprojet}
          recordIdtitre={recordIdtitre}
        />
      )}

      {recordIdToDestroy && (
        <ConfirmModal
          title={`Êtes-vous sûr de supprimer?
          Les données relatives au projet seront supprimées aussi,
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

export default ProjetListTable;
