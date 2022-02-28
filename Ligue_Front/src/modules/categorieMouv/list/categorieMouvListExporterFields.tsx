import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.categorieMouv.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.categorieMouv.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.categorieMouv.fields.description'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.categorieMouv.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.categorieMouv.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
