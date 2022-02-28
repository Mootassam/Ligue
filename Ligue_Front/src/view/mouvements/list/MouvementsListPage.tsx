import React from 'react';
import { i18n } from 'src/i18n';
import MouvementsListFilter from 'src/view/mouvements/list/MouvementsListFilter';
import MouvementsListTable from 'src/view/mouvements/list/MouvementsListTable';
import MouvementsListToolbar from 'src/view/mouvements/list/MouvementsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MouvementsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mouvements.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mouvements.list.title')}
        </PageTitle>

        <MouvementsListToolbar />
        <MouvementsListFilter />
        <MouvementsListTable />
      </ContentWrapper>
    </>
  );
}

export default MouvementsListPage;
