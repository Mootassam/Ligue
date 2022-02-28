import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import CategorieMouvViewItem from 'src/view/categorieMouv/view/CategorieMouvViewItem';
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserViewItem from 'src/view/user/view/UserViewItem';

function MouvementsView(props) {
  const { record, loading } = props;
  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.mouvements.fields.titre')}
            value={record.titre}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.mouvements.fields.typeMouv')}
            value={
              record.typeMouv &&
              i18n(
                `entities.mouvements.enumerators.typeMouv.${record.typeMouv}`,
              )
            }
          />
        </Col>
        <Col sm={4}>
          <CategorieMouvViewItem
            label={i18n('entities.mouvements.fields.categorie')}
            value={record.categorie}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.mouvements.fields.montant')}
            value={record.montant}
          />
        </Col>
        <Col sm={8}>
          <FilesViewItem
            label={i18n(
              'entities.mouvements.fields.attachements',
            )}
            value={record.attachements}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
        </Col>
        <Col sm={2}>
          <TextViewItem
            label={i18n('entities.campagne.fields.createdAt')}
            value={moment(record.createdAt).format(
              'YYYY-MM-DD HH:mm',
            )}
          />
        </Col>
        <Col sm={4}>
          <UserViewItem
            label={i18n('common.createdBy')}
            value={record.createdBy}
          />
        </Col>
      </Row>
    </ViewWrapper>
  );
}

export default MouvementsView;
