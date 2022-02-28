import React from 'react';
import { i18n } from 'src/i18n';
import PalierListFilter from 'src/view/palier/list/PalierListFilter';
import PalierListTable from 'src/view/palier/list/PalierListTable';
import PalierListToolbar from 'src/view/palier/list/PalierListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PalierListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.palier.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.palier.list.title')}
        </PageTitle>

        <PalierListToolbar />
        <PalierListFilter />
        <PalierListTable />
      </ContentWrapper>
    </>
  );
}

export default PalierListPage;
