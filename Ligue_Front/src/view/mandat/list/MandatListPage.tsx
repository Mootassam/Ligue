import React from 'react';
import { i18n } from 'src/i18n';
import MandatListFilter from 'src/view/mandat/list/MandatListFilter';
import MandatListTable from 'src/view/mandat/list/MandatListTable';
import MandatListToolbar from 'src/view/mandat/list/MandatListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MandatListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mandat.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mandat.list.title')}
        </PageTitle>

        <MandatListToolbar />
        <MandatListFilter />
        <MandatListTable />
      </ContentWrapper>
    </>
  );
}

export default MandatListPage;
