import React from 'react';
import { i18n } from 'src/i18n';
import ProduitCategorieListFilter from 'src/view/produitCategorie/list/ProduitCategorieListFilter';
import ProduitCategorieListTable from 'src/view/produitCategorie/list/ProduitCategorieListTable';
import ProduitCategorieListToolbar from 'src/view/produitCategorie/list/ProduitCategorieListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProduitCategorieListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.produitCategorie.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.produitCategorie.list.title')}
        </PageTitle>

        <ProduitCategorieListToolbar />
        <ProduitCategorieListFilter />
        <ProduitCategorieListTable />
      </ContentWrapper>
    </>
  );
}

export default ProduitCategorieListPage;
