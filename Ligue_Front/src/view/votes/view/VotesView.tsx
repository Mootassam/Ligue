import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function VotesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={8}>
          <UserViewItem
            label={i18n('entities.votes.fields.adherent')}
            value={record.adherent}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.votes.fields.votes')}
            value={record.votes}
          />
        </Col>
      </Row>
    </ViewWrapper>
  );
}

export default VotesView;
