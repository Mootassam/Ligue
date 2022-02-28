import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/detailsCampagne/importer/detailsCampagneImporterActions';
import fields from 'src/modules/detailsCampagne/importer/detailsCampagneImporterFields';
import selectors from 'src/modules/detailsCampagne/importer/detailsCampagneImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DetailsCampagneImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.detailsCampagne.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.detailsCampagne.menu'), '/details-campagne'],
          [i18n('entities.detailsCampagne.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.detailsCampagne.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default DetailsCampagneImportPage;
