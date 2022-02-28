import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/historiquePoints/view/historiquePointsViewActions';
import selectors from 'src/modules/historiquePoints/view/historiquePointsViewSelectors';
import HistoriquePointsView from 'src/view/historiquePoints/view/HistoriquePointsView';
import HistoriquePointsViewToolbar from 'src/view/historiquePoints/view/HistoriquePointsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HistoriquePointsPage() {
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
          [i18n('entities.historiquePoints.menu'), '/historique-points'],
          [i18n('entities.historiquePoints.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.historiquePoints.view.title')}
        </PageTitle>

        <HistoriquePointsViewToolbar match={match} />

        <HistoriquePointsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default HistoriquePointsPage;
