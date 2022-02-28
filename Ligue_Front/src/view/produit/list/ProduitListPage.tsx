import React from 'react';
import { i18n } from 'src/i18n';
import ProduitListFilter from 'src/view/produit/list/ProduitListFilter';
import ProduitListTable from 'src/view/produit/list/ProduitListTable';
import ProduitListToolbar from 'src/view/produit/list/ProduitListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProduitListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.produit.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.produit.list.title')}
        </PageTitle>

        <ProduitListToolbar />
        <ProduitListFilter />
        <ProduitListTable />
      </ContentWrapper>
    </>
  );
}

export default ProduitListPage;
