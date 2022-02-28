import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProduitViewItem from 'src/view/produit/view/ProduitViewItem';

function CommandLineView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <ProduitViewItem
        label={i18n('entities.commandLine.fields.product')}
        value={record.product}
      />

      <TextViewItem
        label={i18n('entities.commandLine.fields.quantity')}
        value={record.quantity}
      />

      <TextViewItem
        label={i18n('entities.commandLine.fields.subTotal')}
        value={record.subTotal}
      />
    </ViewWrapper>
  );
}

export default CommandLineView;
