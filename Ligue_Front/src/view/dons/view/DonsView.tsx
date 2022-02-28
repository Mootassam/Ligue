import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DonsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={6}>
          <UserViewItem
            label={i18n('entities.dons.fields.adherent')}
            value={record.adherent}
          />
        </Col>
        <Col sm={3}>
          <TextViewItem
            label={i18n('entities.dons.fields.typePaiement')}
            value={
              record.typePaiement &&
              i18n(
                `entities.dons.enumerators.typePaiement.${record.typePaiement}`,
              )
            }
          />
        </Col>
        <Col sm={3}>
          <TextViewItem
            label={i18n('entities.dons.fields.montant')}
            value={record.montant}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <ImagesViewItem
            label={i18n('entities.dons.fields.attachements')}
            value={record.attachements}
          />
        </Col>
      </Row>
    </ViewWrapper>
  );
}

export default DonsView;
