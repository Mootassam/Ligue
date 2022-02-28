import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import PalierViewItem from 'src/view/palier/view/PalierViewItem';
//import CampagneAutocompleteFormItem from 'src/view/campagne/autocomplete/CampagneAutocompleteFormItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function DetailsCampagneView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.campagne.name') + ' ' + i18n('entities.campagne.fields.titre')}
            value={record.titre}
          />
        </Col>
        <Col sm={4}>
          <UserViewItem
            label={i18n('entities.detailsCampagne.fields.adherent')}
            value={record.adherent}
          />
        </Col>
        <Col sm={4}>
          <PalierViewItem
            label={i18n('entities.detailsCampagne.fields.palier')}
            value={record.palier}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.detailsCampagne.fields.montant')}
            value={record.montant}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.detailsCampagne.fields.typePay')}
            value={
              record.typePay &&
              i18n(
                `entities.detailsCampagne.enumerators.typePay.${record.typePay}`,
              )
            }
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.detailsCampagne.fields.statutPay')}
            value={
              record.statutPay &&
              i18n(
                `entities.detailsCampagne.enumerators.statutPay.${record.statutPay}`,
              )
            }
          />
        </Col>
      </Row>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={12}>
          <FilesViewItem
            label={i18n(
              'entities.detailsCampagne.fields.facture',
            )}
            value={record.facture}
          />
        </Col>
      </Row>

    </ViewWrapper>
  );
}

export default DetailsCampagneView;
