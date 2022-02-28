import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/produit/importer/produitImporterActions';
import fields from 'src/modules/produit/importer/produitImporterFields';
import selectors from 'src/modules/produit/importer/produitImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProduitImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.produit.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.produit.menu'), '/produit'],
          [i18n('entities.produit.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.produit.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ProduitImportPage;
