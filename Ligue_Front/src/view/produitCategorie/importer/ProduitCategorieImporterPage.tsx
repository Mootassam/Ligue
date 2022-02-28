import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/produitCategorie/importer/produitCategorieImporterActions';
import fields from 'src/modules/produitCategorie/importer/produitCategorieImporterFields';
import selectors from 'src/modules/produitCategorie/importer/produitCategorieImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProduitCategorieImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.produitCategorie.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.produitCategorie.menu'), '/produit-categorie'],
          [i18n('entities.produitCategorie.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.produitCategorie.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ProduitCategorieImportPage;
