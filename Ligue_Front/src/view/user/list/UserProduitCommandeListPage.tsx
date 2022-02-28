import React, { useEffect, useState } from 'react';
import { i18n } from 'src/i18n';
import selectors from 'src/modules/user/view/userViewSelectors';
import UserProduitCommandeListFilter from 'src/view/produitCommande/list/UserProdCommandesListFilter';
import UserProduitCommandeListTable from 'src/view/produitCommande/list/UserProduitCommandeListTable';
import ProduitCommandeListToolbar from 'src/view/produitCommande/list/ProduitCommandeListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
//import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import userselectors from 'src/modules/user/view/userViewSelectors';
import ProduitCommandeListTable from 'src/view/produitCommande/list/ProduitCommandeListTable';
import ProduitCommandeListFilter from 'src/view/produitCommande/list/ProduitCommandeListFilter';

function ProduitCommandeListPage(props) {

  const user = useSelector(userselectors.selectUser);
  const loading = useSelector(selectors.selectLoading);

  return (
    <>
      <ContentWrapper>
        <PageTitle>
          {i18n('entities.produitCommande.list.title')}
        </PageTitle>
        {/* <ProduitCommandeListFilter adherent={props.user} />
        <ProduitCommandeListTable /> */}
        <UserProduitCommandeListFilter user={props.user}/>
        <UserProduitCommandeListTable />
      </ContentWrapper>
    </>
  );
}

export default ProduitCommandeListPage;
