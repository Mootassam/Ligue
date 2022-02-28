import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.produitCategorie.fields.id'),
  },
  {
    name: 'titre',
    label: i18n('entities.produitCategorie.fields.titre'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.produitCategorie.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.produitCategorie.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
