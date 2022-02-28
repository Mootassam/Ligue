import React from 'react';
import { i18n } from 'src/i18n';
import ProduitCommandeListFilter from 'src/view/produitCommande/list/ProduitCommandeListFilter';
import ProduitCommandeListTable from 'src/view/produitCommande/list/ProduitCommandeListTable';
import ProduitCommandeListToolbar from 'src/view/produitCommande/list/ProduitCommandeListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProduitCommandeListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.produitCommande.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.produitCommande.list.title')}
        </PageTitle>

        <ProduitCommandeListToolbar />
        <ProduitCommandeListFilter />
        <ProduitCommandeListTable />
      </ContentWrapper>
    </>
  );
}

export default ProduitCommandeListPage;
