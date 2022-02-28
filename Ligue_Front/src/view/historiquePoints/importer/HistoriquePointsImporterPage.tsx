import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/historiquePoints/importer/historiquePointsImporterActions';
import fields from 'src/modules/historiquePoints/importer/historiquePointsImporterFields';
import selectors from 'src/modules/historiquePoints/importer/historiquePointsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HistoriquePointsImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.historiquePoints.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.historiquePoints.menu'), '/historique-points'],
          [i18n('entities.historiquePoints.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.historiquePoints.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default HistoriquePointsImportPage;
