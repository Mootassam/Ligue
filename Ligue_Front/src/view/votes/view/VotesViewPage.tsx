import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/votes/view/votesViewActions';
import selectors from 'src/modules/votes/view/votesViewSelectors';
import VotesView from 'src/view/votes/view/VotesView';
import VotesViewToolbar from 'src/view/votes/view/VotesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VotesPage() {
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
          [i18n('entities.votes.menu')],
          [i18n('entities.votes.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.votes.view.title')}
        </PageTitle>

        <VotesViewToolbar match={match} />

        <VotesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default VotesPage;
