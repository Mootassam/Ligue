import React from 'react';
import { i18n } from 'src/i18n';
import UserAdhesionsListFilter from 'src/view/detailsCampagne/list/UserDetailsCampagneListFilter';
import UserDetailsCampagneListTable from 'src/view/detailsCampagne/list/UserDetailsCampagneListTable';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
//import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import {  useSelector } from 'react-redux';
import userselectors from 'src/modules/user/view/userViewSelectors';
//import selectors from 'src/modules/user/view/userViewSelectors';

function DetailsCampagneListPage(props) {


  
  return (
    <>
      <ContentWrapper>
        <PageTitle>
          {i18n('entities.detailsCampagne.list.title')}
        </PageTitle>
        <UserAdhesionsListFilter user={props.user}/>
        <UserDetailsCampagneListTable  />
      </ContentWrapper>
    </>
  );
}

export default DetailsCampagneListPage;
