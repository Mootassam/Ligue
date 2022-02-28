import React from 'react';
import { i18n } from 'src/i18n';
import CategorieMouvListFilter from 'src/view/categorieMouv/list/CategorieMouvListFilter';
import CategorieMouvListTable from 'src/view/categorieMouv/list/CategorieMouvListTable';
import CategorieMouvListToolbar from 'src/view/categorieMouv/list/CategorieMouvListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CategorieMouvListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.categorieMouv.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.categorieMouv.list.title')}
        </PageTitle>

        <CategorieMouvListToolbar />
        <CategorieMouvListFilter />
        <CategorieMouvListTable />
      </ContentWrapper>
    </>
  );
}

export default CategorieMouvListPage;
