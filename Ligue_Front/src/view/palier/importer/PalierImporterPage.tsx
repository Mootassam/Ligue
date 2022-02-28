import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/palier/importer/palierImporterActions';
import fields from 'src/modules/palier/importer/palierImporterFields';
import selectors from 'src/modules/palier/importer/palierImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PalierImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.palier.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.palier.menu'), '/palier'],
          [i18n('entities.palier.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.palier.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PalierImportPage;
