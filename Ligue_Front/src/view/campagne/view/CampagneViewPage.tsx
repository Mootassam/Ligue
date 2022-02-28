import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/campagne/view/campagneViewActions';
import selectors from 'src/modules/campagne/view/campagneViewSelectors';
import CampagneView from 'src/view/campagne/view/CampagneView';
import CampagneViewToolbar from 'src/view/campagne/view/CampagneViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CampagnePage() {
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
          [i18n('entities.campagne.menu'), '/campagne'],
          [i18n('entities.campagne.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.campagne.view.title')}
        </PageTitle>

        <CampagneViewToolbar match={match} />

        <CampagneView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CampagnePage;
