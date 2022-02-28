import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/produitCategorie/view/produitCategorieViewActions';
import selectors from 'src/modules/produitCategorie/view/produitCategorieViewSelectors';
import ProduitCategorieView from 'src/view/produitCategorie/view/ProduitCategorieView';
import ProduitCategorieViewToolbar from 'src/view/produitCategorie/view/ProduitCategorieViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProduitCategoriePage() {
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
          [i18n('entities.produitCategorie.menu'), '/produit-categorie'],
          [i18n('entities.produitCategorie.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.produitCategorie.view.title')}
        </PageTitle>

        <ProduitCategorieViewToolbar match={match} />

        <ProduitCategorieView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ProduitCategoriePage;
