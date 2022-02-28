import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/produitCommande/view/produitCommandeViewActions';
import selectors from 'src/modules/produitCommande/view/produitCommandeViewSelectors';
import ProduitCommandeView from 'src/view/produitCommande/view/ProduitCommandeView';
import ProduitCommandeViewToolbar from 'src/view/produitCommande/view/ProduitCommandeViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProduitCommandePage() {
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
          [i18n('entities.produitCommande.menu'), '/produit-commande'],
          [i18n('entities.produitCommande.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.produitCommande.view.title')}
        </PageTitle>

        <ProduitCommandeViewToolbar match={match} />

        <ProduitCommandeView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ProduitCommandePage;
