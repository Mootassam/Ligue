import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/campagne/importer/campagneImporterActions';
import fields from 'src/modules/campagne/importer/campagneImporterFields';
import selectors from 'src/modules/campagne/importer/campagneImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CampagneImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.campagne.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.campagne.menu'), '/campagne'],
          [i18n('entities.campagne.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.campagne.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CampagneImportPage;
