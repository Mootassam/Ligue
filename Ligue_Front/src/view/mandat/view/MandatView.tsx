import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MandatView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.mandat.fields.titre')}
            value={record.titre}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.mandat.fields.startdate')}
            value={record.startdate}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n(
              'entities.mandat.fields.enddate',
            )}
            value={moment(record.enddate).format(
              'YYYY-MM-DD',
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <UserViewItem
            label={i18n('entities.mandat.fields.members')}
            value={record.members}
          />
        </Col>
        <Col sm={4}>
          <FilesViewItem
            label={i18n(
              'entities.mandat.fields.pv',
            )}
            value={record.pv}
          />
        </Col>
      </Row>


      {/*      

      {record.enddate && <TextViewItem
        label={i18n(
          'entities.mandat.fields.enddate',
        )}
        value={moment(record.enddate).format(
          'YYYY-MM-DD',
        )}
      />} */}




    </ViewWrapper>
  );
}

export default MandatView;
