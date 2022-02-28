import React from 'react';
import { i18n } from 'src/i18n';
import DetailsCampagneListFilter from 'src/view/detailsCampagne/list/DetailsCampagneListFilter';
import DetailsCampagneListTable from 'src/view/detailsCampagne/list/DetailsCampagneListTable';
import DetailsCampagneListToolbar from 'src/view/detailsCampagne/list/DetailsCampagneListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DetailsCampagneListPage(props) {

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.detailsCampagne.menu')],
        ]}
      />

      <ContentWrapper>

        <PageTitle>
          {i18n('entities.detailsCampagne.list.title')}
        </PageTitle>

        <DetailsCampagneListToolbar />
        <DetailsCampagneListFilter idcampagne={props.location.state.idcampagne}/>
        <DetailsCampagneListTable />
      </ContentWrapper>
    </>
  );
}

export default DetailsCampagneListPage;
