import React, { useState } from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import DetailsCampagneViewItem from 'src/view/detailsCampagne/view/DetailsCampagneViewItem';
import Toolbar from 'src/view/shared/styles/Toolbar';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useDispatch, useSelector } from 'react-redux';
import DetailsCampagneListTable from 'src/view/detailsCampagne/list/DetailsCampagneListTable';
import DetailsCampagneListFilter from 'src/view/detailsCampagne/list/DetailsCampagneListFilter';
import campagneSelectors from 'src/modules/campagne/campagneSelectors';
import { Link } from 'react-router-dom';
import DetailsCampagneFormModal from 'src/view/detailsCampagne/form/DetailsCampagneFormModal';
import { useForm } from 'react-hook-form';
import ButtonIcon from 'src/view/shared/ButtonIcon';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CampagneView(props) {
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

  const hasPermissionToCreate = useSelector(
    campagneSelectors.selectPermissionToCreate,
  );

  const doCreateSuccess = (record) => {
    window.location.reload();
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
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <Toolbar>
      <Tabs defaultActiveKey="informations" id="tab-inf-projet">
        <Tab eventKey="informations" title="Informations">
          <ViewWrapper style={{ marginTop: '10px' }}>
            <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
              <Col sm={8}>
                <TextViewItem
                  label={i18n('entities.campagne.fields.titre')}
                  value={record.titre}
                />

              </Col>
              <Col sm={4}>
                <TextViewItem
                  label={i18n('entities.campagne.fields.statut')}
                  value={
                    record.statut &&
                    i18n(
                      `entities.campagne.enumerators.statut.${record.statut}`,
                    )
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <TextViewItem
                  label={i18n('entities.campagne.fields.datedebut')}
                  value={record.datedebut}
                />
              </Col>
              <Col sm={4}>
                <TextViewItem
                  label={i18n('entities.campagne.fields.datefin')}
                  value={record.datefin}
                />
              </Col>
              <Col sm={4}>
                <TextViewItem
                  label={i18n('entities.campagne.fields.annee')}
                  value={record.annee}
                />
              </Col>
            </Row>
          </ViewWrapper>
        </Tab>
        <Tab eventKey="details" title="Details" >
          <DetailsCampagneListFilter idcampagne={record.id} titre={record.titre} />
          <DetailsCampagneListTable />
          {hasPermissionToCreate && (
            <Link
              className="btn btn-link"

              onClick={() => { doOpenModal(record.id, record.titre) }
              }>
              <button className="btn btn-primary" type="button">
                <ButtonIcon iconClass="fas fa-plus" />{' '}
                {i18n('entities.detailsCampagne.new.title')}
              </button>
            </Link>)}
          {modalVisible && (
            <DetailsCampagneFormModal
              onClose={doCloseModal}
              onSuccess={doCreateSuccess}
              recordIdcampagne={recordIdcampagne}
              recordTitrecampagne={recordTitrecampagne}

            />
          )}
        </Tab>
      </Tabs>
    </Toolbar>

  );
}

export default CampagneView;
