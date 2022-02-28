import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import { Link } from 'react-router-dom';
import actions from 'src/modules/projet/view/projetViewActions';
import selectors from 'src/modules/projet/view/projetViewSelectors';

import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import ProjetDetailsToolbar from 'src/view/projet/view/ProjetDetailsToolbar';


function ProjetPage(props) {
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
          [i18n('entities.projet.menu'), '/projet'],
          [i18n('entities.projet.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.projet.view.title')}
        </PageTitle>
        <ProjetDetailsToolbar loading={loading} record={record} idprojet={match.params.id} />
      </ContentWrapper>
    </>
  );
}

export default ProjetPage;
