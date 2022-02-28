import React from 'react';
import { i18n } from 'src/i18n';
import AssociationListFilter from 'src/view/association/list/AssociationListFilter';
import AssociationListTable from 'src/view/association/list/AssociationListTable';
import AssociationListToolbar from 'src/view/association/list/AssociationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

import selectorsAudit from 'src/modules/auditLog/auditLogSelectors';
import { useSelector } from 'react-redux';

function AssociationListPage(props) {

  const hasPermissionToReadAudit = useSelector(
    selectorsAudit.selectPermissionToRead,
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.association.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.association.list.title')}
        </PageTitle>

        {hasPermissionToReadAudit ?
          <AssociationListToolbar />
          :
          null
        }
        <AssociationListFilter />
        <AssociationListTable />
      </ContentWrapper>
    </>
  );
}

export default AssociationListPage;
