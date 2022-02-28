import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mouvements/view/mouvementsViewActions';
import selectors from 'src/modules/mouvements/view/mouvementsViewSelectors';
import MouvementsView from 'src/view/mouvements/view/MouvementsView';
import MouvementsViewToolbar from 'src/view/mouvements/view/MouvementsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MouvementsPage() {
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
          [i18n('entities.mouvements.menu'), '/mouvements'],
          [i18n('entities.mouvements.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mouvements.view.title')}
        </PageTitle>

        <MouvementsViewToolbar match={match} />

        <MouvementsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MouvementsPage;
