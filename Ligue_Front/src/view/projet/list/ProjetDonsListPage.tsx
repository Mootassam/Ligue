import React, { useEffect } from 'react';
import { i18n } from 'src/i18n';
import ProjetDonsListFilter from 'src/view/dons/list/ProjetDonsListFilter';
import DonsListTable from 'src/view/dons/list/DonsListTable';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function DonsListPage(props) {

  let average = 0;
  if (props.idprojet) {
    let totalFunds = 0;
    for (let i = 0; i < props.idprojet.dons.length; i++) {
      totalFunds = totalFunds + props.idprojet.dons[i].montant;
    }
    average = totalFunds;
  }

  return (
    <>
      <ContentWrapper>
        {props.idprojet ?

          <Row>
            <Col sm={2}>
              <TextViewItem
                label={i18n('entities.projet.fields.dons')}
                value={average}
              />
            </Col>
            <Col sm={2}>
              <TextViewItem
                label={i18n('entities.projet.fields.budget')}
                value={props.idprojet.budget}
              />
            </Col>
            <Col sm={8}>
            </Col>
          </Row>

          :
          null
        }
        {props.idprojet ?
          <div>
            <ProjetDonsListFilter idprojet={props.idprojet._id} />
            <DonsListTable />
          </div>
          :
          null
        }
      </ContentWrapper>
    </>
  );
}

export default DonsListPage;