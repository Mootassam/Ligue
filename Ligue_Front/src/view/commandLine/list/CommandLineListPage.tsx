import React from 'react';
import { i18n } from 'src/i18n';
import CommandLineListFilter from 'src/view/commandLine/list/CommandLineListFilter';
import CommandLineListTable from 'src/view/commandLine/list/CommandLineListTable';
import CommandLineListToolbar from 'src/view/commandLine/list/CommandLineListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CommandLineListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.commandLine.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.commandLine.list.title')}
        </PageTitle>

        <CommandLineListToolbar />
        <CommandLineListFilter />
        <CommandLineListTable />
      </ContentWrapper>
    </>
  );
}

export default CommandLineListPage;
