import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import projetSelectors from 'src/modules/projet/projetSelectors';
import destroyActions from 'src/modules/projet/destroy/projetDestroyActions';
import destroySelectors from 'src/modules/projet/destroy/projetDestroySelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Toolbar from 'src/view/shared/styles/Toolbar';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ButtonIcon from 'src/view/shared/ButtonIcon';
import ProjetViewPage from 'src/view/projet/view/ProjetViewPage';
import ProjetDonsListPage from '../list/ProjetDonsListPage';
import ProjetVotesListPage from '../list/ProjetVotesListPage';

function ProjetViewToolbar(props) {
  return (
    <Toolbar>
      <Tabs defaultActiveKey="informations" id="tab-inf-projet">
        <Tab eventKey="informations" title="Informations">
          <ProjetViewPage />
        </Tab>
        <Tab eventKey="Votes" title="Votes" >
          <ProjetVotesListPage idprojet={props.record} />
        </Tab>
        <Tab eventKey="dons" title="Dons"  >
          <ProjetDonsListPage idprojet={props.record} />
        </Tab>
      </Tabs>
    </Toolbar>
  );
}

export default ProjetViewToolbar;
