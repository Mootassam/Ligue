import React, {useEffect} from 'react';
import { i18n } from 'src/i18n';
import DonsListFilter from 'src/view/dons/list/DonsListFilter';
import UserDonsListTable from 'src/view/dons/list/UserDonsListTable';
//import DonsListToolbar from 'src/view/dons/list/DonsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
//import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import {  useSelector } from 'react-redux';
import userselectors from 'src/modules/user/view/userViewSelectors';
//import selectors from 'src/modules/user/view/userViewSelectors';


function DonsListPage(props) {

  // const dispatch = useDispatch();
  // const match = useRouteMatch();

 

  // useEffect(() => {
  //   dispatch(actions.doFind(match.params.id));
  // }, [dispatch, match.params.id]);

  const user = useSelector(userselectors.selectUser);


 
  return (
    <>
      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dons.list.title')}
        </PageTitle>
        <DonsListFilter user={props.user}/>
        <UserDonsListTable />
      </ContentWrapper>
    </>
  );
}

export default DonsListPage;