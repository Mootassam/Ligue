import React, { useState } from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import TextAreaViewItem from 'src/view/shared/view/TextAreaViewItem';
import moment from 'moment';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjetView(props) {

  const { record, loading } = props;
  let percentage = 0;
  if (loading || !record) {
    return <Spinner />;
  }
  if (record.votes) {
    let totalVotes = 0;
    for (let i = 0; i < record.votes.length; i++) {
      totalVotes = totalVotes + record.votes[i].votes;
    }
    percentage = totalVotes / record.votes.length;
  }

  return (
    <ViewWrapper>
      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.projet.fields.titre')}
            value={record.titre}
          />
        </Col>
        <Col sm={4}>
          <TextAreaViewItem
            label={i18n('entities.projet.fields.description')}
            value={record.description}
          />
        </Col>
        <Col sm={4}>
          <TextAreaViewItem
            label={i18n('entities.projet.fields.details')}
            value={record.details}
          />
        </Col>

      </Row>
      <Row>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.projet.fields.typeProjet')}
            value={
              record.typeProjet &&
              i18n(
                `entities.projet.enumerators.typeProjet.${record.typeProjet}`,
              )
            }
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.projet.fields.statutProjet')}
            value={
              record.statutProjet &&
              i18n(
                `entities.projet.enumerators.statutProjet.${record.statutProjet}`,
              )
            }
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.projet.fields.budget')}
            value={record.budget}
          />
        </Col>
      </Row>

      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.projet.fields.lieu')}
            value={record.lieu}
          />
        </Col>
        <Col sm={4}>
          {record.dateDebutProjet && <TextViewItem
            label={i18n(
              'entities.projet.fields.dateDebutProjet',
            )}
            value={moment(record.dateDebutProjet).format(
              'DD-MM-YYYY',
            )}
          />}
        </Col>
        <Col sm={4}>
          {record.dateFinProjet && <TextViewItem
            label={i18n(
              'entities.projet.fields.dateFinProjet',
            )}
            value={moment(record.dateFinProjet).format(
              'DD-MM-YYYY',
            )}
          />}
        </Col>
      </Row>

      <Row>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.projet.fields.dateDebutDon')}
            value={moment(record.dateDebutDon).format(
              'DD-MM-YYYY')}
          />
        </Col>
        <Col sm={4}>
          <TextViewItem
            label={i18n('entities.projet.fields.dateFinDon')}
            value={moment(record.dateFinDon).format(
              'DD-MM-YYYY')}
          />
        </Col>
        <Col sm={4}>
          {/* <label className="col-form-label">
            {i18n('entities.projet.fields.votes')}
          </label>
          <ReactStars
            count={5}
            size={28}
            edit={false}
            value={percentage}
            activeColor="#ffd700" /> */}
        </Col>
      </Row>

      <Row style={{ backgroundColor: '#f0f2f5', paddingBottom: '10px' }}>
        <Col sm={4}>
          <ImagesViewItem
            label={i18n('entities.projet.fields.photoPrincipal')}
            value={record.photoPrincipal}
          />
        </Col>
        <Col sm={4}>
          <ImagesViewItem
            label={i18n('entities.projet.fields.photos')}
            value={record.photos}
          />
        </Col>
        <Col sm={4}>
          <FilesViewItem
            label={i18n(
              'entities.projet.fields.attachements',
            )}
            value={record.attachements}
          />
        </Col>
      </Row>
    </ViewWrapper>
  );
}

export default ProjetView;
