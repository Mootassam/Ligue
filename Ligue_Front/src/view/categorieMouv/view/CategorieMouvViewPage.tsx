import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/categorieMouv/view/categorieMouvViewActions';
import selectors from 'src/modules/categorieMouv/view/categorieMouvViewSelectors';
import CategorieMouvView from 'src/view/categorieMouv/view/CategorieMouvView';
import CategorieMouvViewToolbar from 'src/view/categorieMouv/view/CategorieMouvViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CategorieMouvPage() {
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
          [i18n('entities.categorieMouv.menu'), '/categorie-mouv'],
          [i18n('entities.categorieMouv.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.categorieMouv.view.title')}
        </PageTitle>

        <CategorieMouvViewToolbar match={match} />

        <CategorieMouvView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CategorieMouvPage;
