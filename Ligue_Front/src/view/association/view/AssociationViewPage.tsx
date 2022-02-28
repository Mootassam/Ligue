import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/association/view/associationViewActions';
import selectors from 'src/modules/association/view/associationViewSelectors';
import AssociationView from 'src/view/association/view/AssociationView';
import AssociationViewToolbar from 'src/view/association/view/AssociationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AssociationPage() {
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
          [i18n('entities.association.menu'), '/association'],
          [i18n('entities.association.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.association.view.title')}
        </PageTitle>

        <AssociationViewToolbar match={match} />

        <AssociationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AssociationPage;
