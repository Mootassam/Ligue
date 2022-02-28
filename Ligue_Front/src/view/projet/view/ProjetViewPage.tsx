import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/projet/view/projetViewActions';
import selectors from 'src/modules/projet/view/projetViewSelectors';
import ProjetView from 'src/view/projet/view/ProjetView';
import ProjetViewToolbar from 'src/view/projet/view/ProjetViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProjetPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <ContentWrapper>
        <ProjetView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ProjetPage;
