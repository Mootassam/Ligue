import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

import TextAreaViewItem from 'src/view/shared/view/TextAreaViewItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PalierView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={3}>
          <TextViewItem
            label={i18n('entities.palier.fields.title')}
            value={record.title}
          />
        </Col>
        <Col sm={3}>
          <TextViewItem
            label={i18n('entities.palier.fields.montant')}
            value={record.montant}
          />
        </Col>
        <Col sm={6}>
          <TextAreaViewItem
            label={i18n('entities.palier.fields.details')}
            value={record.details}
          />
        </Col>
      </Row>
    </ViewWrapper>
  );
}

export default PalierView;
