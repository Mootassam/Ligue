import React from 'react';
import { i18n } from 'src/i18n';
import CampagneListFilter from 'src/view/campagne/list/CampagneListFilter';
import CampagneListTable from 'src/view/campagne/list/CampagneListTable';
import CampagneListToolbar from 'src/view/campagne/list/CampagneListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CampagneListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.campagne.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.campagne.list.title')}
        </PageTitle>

        <CampagneListToolbar />
        <CampagneListFilter />
        <CampagneListTable />
      </ContentWrapper>
    </>
  );
}

export default CampagneListPage;
