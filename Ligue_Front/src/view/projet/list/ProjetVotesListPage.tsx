import React from 'react';
import { i18n } from 'src/i18n';
import ProjetVotesListFilter from 'src/view/votes/list/ProjetVotesListFilter';
import VotesListTable from 'src/view/votes/list/VotesListTable';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactStars from "react-stars";

function ProjetVotesListPage(props) {

  let percentage = 0;

  if (props.idprojet) {
    let totalVotes = 0;
    for (let i = 0; i < props.idprojet.votes.length; i++) {
      totalVotes = totalVotes + props.idprojet.votes[i].votes;
    }
    percentage = totalVotes / props.idprojet.votes.length;
  }
  return (
    <>
      <ContentWrapper>
        {props.idprojet ?
          <Row>
            <Col sm={12}>
              <label className="col-form-label">
                {i18n('entities.projet.fields.votes')}
              </label>
              <ReactStars
                count={5}
                size={28}
                edit={false}
                value={percentage}
                activeColor="#ffd700" />
            </Col>

          </Row>
          :
          null
        }
        {props.idprojet ?
          <div>
            <ProjetVotesListFilter idprojet={props.idprojet._id} />
            <VotesListTable />
          </div>
          :
          null
        }
      </ContentWrapper>
    </>
  );
}

export default ProjetVotesListPage;
