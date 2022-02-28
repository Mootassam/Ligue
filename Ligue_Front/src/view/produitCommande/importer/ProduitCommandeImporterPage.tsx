import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/produitCommande/importer/produitCommandeImporterActions';
import fields from 'src/modules/produitCommande/importer/produitCommandeImporterFields';
import selectors from 'src/modules/produitCommande/importer/produitCommandeImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProduitCommandeImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.produitCommande.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.produitCommande.menu'), '/produit-commande'],
          [i18n('entities.produitCommande.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.produitCommande.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ProduitCommandeImportPage;
