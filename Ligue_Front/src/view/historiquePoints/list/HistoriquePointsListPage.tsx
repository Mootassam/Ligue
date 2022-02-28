import React from 'react';
import { i18n } from 'src/i18n';
import HistoriquePointsListFilter from 'src/view/historiquePoints/list/HistoriquePointsListFilter';
import HistoriquePointsListTable from 'src/view/historiquePoints/list/HistoriquePointsListTable';
import HistoriquePointsListToolbar from 'src/view/historiquePoints/list/HistoriquePointsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HistoriquePointsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.historiquePoints.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.historiquePoints.list.title')}
        </PageTitle>

        <HistoriquePointsListToolbar />
        <HistoriquePointsListFilter />
        <HistoriquePointsListTable />
      </ContentWrapper>
    </>
  );
}

export default HistoriquePointsListPage;
