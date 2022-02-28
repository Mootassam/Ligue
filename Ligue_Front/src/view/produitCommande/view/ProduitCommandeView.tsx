import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import CommandLineViewItem from 'src/view/commandLine/view/CommandLineViewItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import moment from 'moment';

function ProduitCommandeView(props) {
  const { record, loading } = props;
  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Container>
        <Row>
          <Col sm={6}>
            <UserViewItem
              label={i18n('entities.produitCommande.fields.adherent')}
              value={record.adherent}
            />
          </Col>
          <Col sm={4}>
            <FilesViewItem
              label={i18n(
                'entities.produitCommande.fields.attachements',
              )}
              value={record.attachements}
            />
          </Col>
          <Col sm={2}>
            <TextViewItem
              label={i18n('entities.produitCommande.fields.delivered')}
              value={
                record.delivered
                  ? i18n('common.yes')
                  : i18n('common.no')
              }
            />
          </Col>
        </Row>
        {record.commandLine ?
          <div>
            <Row>
              <Col sm={4}>{i18n('entities.commandLine.fields.product')}</Col>
              <Col sm={4}>{i18n('entities.commandLine.fields.quantity')}</Col>
              <Col sm={4}>{i18n('entities.commandLine.fields.subTotal')}</Col>
            </Row>
            <Dropdown.Divider />
          </div>
          :
          null
        }
        {record.commandLine.map((value, index) =>
          <div>
            <Row>
              <Col sm={4}>{value.productTitle}</Col>
              <Col sm={4}>{value.quantity}</Col>
              <Col sm={4}>{value.subTotal}</Col>
            </Row>
            <Dropdown.Divider />
          </div>
        )}
        <Row>
          <Col sm={8}></Col>
          <Col sm={4}>
            <TextViewItem
              label={i18n('entities.produitCommande.fields.total')}
              value={record.total}
            />
          </Col>
        </Row>
        <Dropdown.Divider />
      </Container>
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

export default ProduitCommandeView;
