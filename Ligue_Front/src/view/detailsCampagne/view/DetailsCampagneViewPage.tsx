import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/detailsCampagne/view/detailsCampagneViewActions';
import selectors from 'src/modules/detailsCampagne/view/detailsCampagneViewSelectors';
import DetailsCampagneView from 'src/view/detailsCampagne/view/DetailsCampagneView';
import DetailsCampagneViewToolbar from 'src/view/detailsCampagne/view/DetailsCampagneViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DetailsCampagnePage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          // [i18n('entities.detailsCampagne.menu'), '/details-campagne'],
          [i18n('entities.detailsCampagne.menu')],
          // [i18n('entities.detailsCampagne.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.detailsCampagne.view.title')}
        </PageTitle>

        <DetailsCampagneViewToolbar match={match} />

        <DetailsCampagneView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default DetailsCampagnePage;
