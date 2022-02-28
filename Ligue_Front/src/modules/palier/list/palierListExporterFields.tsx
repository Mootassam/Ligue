import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.palier.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.palier.fields.title'),
  },
  {
    name: 'montant',
    label: i18n('entities.palier.fields.montant'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'details',
    label: i18n('entities.palier.fields.details'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.palier.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.palier.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
