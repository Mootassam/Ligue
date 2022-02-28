import React, { useEffect } from 'react';
import { i18n } from 'src/i18n';
import DonsListFilter from 'src/view/dons/list/DonsListFilter';
import DonsListTable from 'src/view/dons/list/DonsListTable';
import DonsListToolbar from 'src/view/dons/list/DonsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { useDispatch, useSelector } from 'react-redux';
import userselectors from 'src/modules/user/view/userViewSelectors';
import { useRouteMatch } from 'react-router-dom';
import actions from 'src/modules/user/view/userViewActions';



function DonsListPage(props) {
  const dispatch = useDispatch();
  const match = useRouteMatch();


  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);


  const user = useSelector(userselectors.selectUser);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dons.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dons.list.title')}
        </PageTitle>

        <DonsListToolbar />
        <DonsListFilter match={match} user={match.params.id} />
        <DonsListTable />
      </ContentWrapper>
    </>
  );
}

export default DonsListPage;