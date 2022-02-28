import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import TextAreaViewItem from 'src/view/shared/view/TextAreaViewItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AssociationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={3}>
          <TextViewItem
            label={i18n('entities.association.fields.nom')}
            value={record.nom}
          />
        </Col>
        <Col sm={3}>
          <TextViewItem
            label={i18n('entities.association.fields.phone')}
            value={record.phone}
          />
        </Col>
        <Col sm={6}>
          <TextAreaViewItem
            label={i18n('entities.association.fields.description')}
            value={record.description}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <TextViewItem
            label={i18n('entities.association.fields.adresse')}
            value={record.adresse}
          />
        </Col>
        <Col sm={3}>
          <TextViewItem
            label={i18n('entities.association.fields.tva')}
            value={record.tva}
          />
        </Col>
        <Col sm={6}>
          <TextViewItem
            label={i18n('entities.association.fields.email')}
            value={record.email}
          />
        </Col>
      </Row>
    </ViewWrapper>
  );
}

export default AssociationView;
