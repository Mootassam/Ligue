import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.commandLine.fields.id'),
  },
  {
    name: 'product',
    label: i18n('entities.commandLine.fields.product'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'quantity',
    label: i18n('entities.commandLine.fields.quantity'),
  },
  {
    name: 'subTotal',
    label: i18n('entities.commandLine.fields.subTotal'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.commandLine.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.commandLine.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
