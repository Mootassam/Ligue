import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/projet/importer/projetImporterActions';
import fields from 'src/modules/projet/importer/projetImporterFields';
import selectors from 'src/modules/projet/importer/projetImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProjetImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.projet.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.projet.menu'), '/projet'],
          [i18n('entities.projet.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.projet.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ProjetImportPage;
