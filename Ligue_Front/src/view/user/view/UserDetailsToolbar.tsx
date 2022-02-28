import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import userSelectors from 'src/modules/user/userSelectors';
import selectors from 'src/modules/user/view/userViewSelectors';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import UserViewPage from 'src/view/user/view/UserViewPage';
import UserAdhesionListPage from '../list/UserAdhesionListPage';
import UserDonsListPage from '../list/UserDonsListPage';
import UserHistoriquesListPage from '../list/UserHistoriquesPointsListPage';
import UserVotesListPage from '../list/UserVotesListPage';
import UserProduitCommandeListPage from '../list/UserProduitCommandeListPage';


function UserDetailsToolbar(props) {
  const { match } = props;

  const user = useSelector(selectors.selectUser);

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    userSelectors.selectPermissionToEdit,
  );


  return (
    <Toolbar>
      <Tabs defaultActiveKey="informations" id="tab-inf-user">
        <Tab eventKey="informations" title="Informations">
          <UserViewPage />
        </Tab>
        <Tab eventKey="adhesions" title="Adhesions" >
          <UserAdhesionListPage user={match.params.id} />
        </Tab>
        <Tab eventKey="historiquesPoints" title="Gamifications">
          <UserHistoriquesListPage user={match.params.id} />
        </Tab>
        <Tab eventKey="Votes" title="Votes">
          <UserVotesListPage user={match.params.id} />v
        </Tab>
        <Tab eventKey="dons" title="Dons">
          <UserDonsListPage user={match.params.id} />
        </Tab>
        <Tab eventKey="achats" title="Achats">
          <UserProduitCommandeListPage user={match.params.id} />
        </Tab>
      </Tabs>
    </Toolbar>
  );
}

export default UserDetailsToolbar;
