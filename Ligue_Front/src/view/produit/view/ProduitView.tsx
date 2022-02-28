import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import TextAreaViewItem from 'src/view/shared/view/TextAreaViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import ProduitCategorieViewItem from 'src/view/produitCategorie/view/ProduitCategorieViewItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProduitView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (

    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={4}>
          <ProduitCategorieViewItem
            label={i18n('entities.produitCategorie.name')}
            value={record.category}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.produit.fields.titre')}
            value={record.titre}
          />
        </Col>
        <Col sm={4}>
          <TextAreaViewItem
            label={i18n('entities.produit.fields.description')}
            value={record.description}
          />
        </Col>

      </Row>
      <Row>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.produit.fields.prix')}
            value={record.prix}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.produit.fields.stock')}
            value={record.stock}
          />
        </Col>
        <Col sm={2}>
          <TextViewItem
            label={i18n('entities.produit.fields.publish')}
            value={
              record.publish
                ? i18n('common.yes')
                : i18n('common.no')
            }
          />
        </Col>
        <Col sm={2}>
          <TextViewItem
            label={i18n('entities.produit.fields.stockable')}
            value={
              record.stockable
                ? i18n('common.yes')
                : i18n('common.no')
            }
          />
        </Col>
      </Row>

      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={12}>
          <ImagesViewItem
            label={i18n('entities.produit.fields.photos')}
            value={record.photos}
          />
        </Col>
      </Row>

    </ViewWrapper>

  );
}

export default ProduitView;
