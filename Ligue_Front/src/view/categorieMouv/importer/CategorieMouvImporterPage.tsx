import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/categorieMouv/importer/categorieMouvImporterActions';
import fields from 'src/modules/categorieMouv/importer/categorieMouvImporterFields';
import selectors from 'src/modules/categorieMouv/importer/categorieMouvImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CategorieMouvImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.categorieMouv.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.categorieMouv.menu'), '/categorie-mouv'],
          [i18n('entities.categorieMouv.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.categorieMouv.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CategorieMouvImportPage;
