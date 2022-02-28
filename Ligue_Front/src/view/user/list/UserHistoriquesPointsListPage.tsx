import React from 'react';
import { i18n } from 'src/i18n';
import UserHistoriquePointsListFilter from 'src/view/historiquePoints/list/UserHistoriquePointsFilter';
import HistoriquePointsListTable from 'src/view/historiquePoints/list/HistoriquePointsListTable';
import HistoriquePointsListToolbar from 'src/view/historiquePoints/list/HistoriquePointsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import {  useSelector } from 'react-redux';
import userselectors from 'src/modules/user/view/userViewSelectors';

function HistoriquePointsListPage(props) {
    const user = useSelector(userselectors.selectUser);
  return (
    <>
      <ContentWrapper>
        <PageTitle>
          {i18n('entities.historiquePoints.list.title')}
        </PageTitle>
        <UserHistoriquePointsListFilter user={props.user} />
        <HistoriquePointsListTable />
      </ContentWrapper>
    </>
  );
}

export default HistoriquePointsListPage;
