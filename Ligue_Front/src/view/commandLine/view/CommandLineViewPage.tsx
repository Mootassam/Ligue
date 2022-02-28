import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/commandLine/view/commandLineViewActions';
import selectors from 'src/modules/commandLine/view/commandLineViewSelectors';
import CommandLineView from 'src/view/commandLine/view/CommandLineView';
import CommandLineViewToolbar from 'src/view/commandLine/view/CommandLineViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CommandLinePage() {
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
          [i18n('entities.commandLine.menu')],
          [i18n('entities.commandLine.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.commandLine.view.title')}
        </PageTitle>

        <CommandLineViewToolbar match={match} />

        <CommandLineView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CommandLinePage;
