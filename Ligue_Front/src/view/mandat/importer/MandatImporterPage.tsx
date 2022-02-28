import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mandat/importer/mandatImporterActions';
import fields from 'src/modules/mandat/importer/mandatImporterFields';
import selectors from 'src/modules/mandat/importer/mandatImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MandatImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.mandat.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mandat.menu'), '/mandat'],
          [i18n('entities.mandat.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mandat.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MandatImportPage;
