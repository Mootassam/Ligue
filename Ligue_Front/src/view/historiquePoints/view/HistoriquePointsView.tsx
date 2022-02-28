import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import TextAreaViewItem from 'src/view/shared/view/TextAreaViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';

import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HistoriquePointsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (

    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={8}>
          <UserViewItem
            label={i18n('entities.historiquePoints.fields.adherent')}
            value={record.adherent}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.historiquePoints.fields.points')}
            value={record.points}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <TextAreaViewItem
            label={i18n('entities.historiquePoints.fields.commentaire')}
            value={record.commentaire}
          />
        </Col>
        <Col sm={4}>
          <FilesViewItem
            label={i18n(
              'entities.historiquePoints.fields.attachements',
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

export default HistoriquePointsView;
