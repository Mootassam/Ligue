import React from 'react';
import { i18n } from 'src/i18n';
import VotesListFilter from 'src/view/votes/list/VotesListFilter';
import UserVotesListTable from 'src/view/votes/list/UserVotesListTable';
//import VotesListToolbar from 'src/view/votes/list/VotesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
//import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import {  useSelector } from 'react-redux';
import userselectors from 'src/modules/user/view/userViewSelectors';
//import selectors from 'src/modules/user/view/userViewSelectors';

function VotesListPage(props) {

  const user = useSelector(userselectors.selectUser);


  return (
    <>
      <ContentWrapper>
        <PageTitle>
          {i18n('entities.votes.list.title')}
        </PageTitle>
        <VotesListFilter user={props.user}/>
        <UserVotesListTable />
      </ContentWrapper>
    </>
  );
}

export default VotesListPage;
