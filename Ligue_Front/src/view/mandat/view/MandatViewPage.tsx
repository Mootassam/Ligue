import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mandat/view/mandatViewActions';
import selectors from 'src/modules/mandat/view/mandatViewSelectors';
import MandatView from 'src/view/mandat/view/MandatView';
import MandatViewToolbar from 'src/view/mandat/view/MandatViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MandatPage() {
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
          [i18n('entities.mandat.menu'), '/mandat'],
          [i18n('entities.mandat.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mandat.view.title')}
        </PageTitle>

        <MandatViewToolbar match={match} />

        <MandatView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MandatPage;
