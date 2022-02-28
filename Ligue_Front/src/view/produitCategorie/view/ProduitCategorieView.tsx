import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProduitViewItem from 'src/view/produit/view/ProduitViewItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProduitCategorieView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.produitCategorie.fields.titre')}
            value={record.titre}
          />
        </Col>
        <Col sm={8}>
          <ProduitViewItem
            label={i18n('entities.produit.name')}
            value={record.produit}
          />
        </Col>
      </Row>
    </ViewWrapper>
  );
}

export default ProduitCategorieView;
