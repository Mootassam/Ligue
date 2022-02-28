import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mouvements/importer/mouvementsImporterActions';
import fields from 'src/modules/mouvements/importer/mouvementsImporterFields';
import selectors from 'src/modules/mouvements/importer/mouvementsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MouvementsImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.mouvements.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mouvements.menu'), '/mouvements'],
          [i18n('entities.mouvements.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mouvements.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MouvementsImportPage;
