import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.produit.fields.id'),
  },
  {
    name: 'titre',
    label: i18n('entities.produit.fields.titre'),
  },
  {
    name: 'description',
    label: i18n('entities.produit.fields.description'),
  },
  {
    name: 'publish',
    label: i18n('entities.produit.fields.publish'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'prix',
    label: i18n('entities.produit.fields.prix'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'photos',
    label: i18n('entities.produit.fields.photos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'stock',
    label: i18n('entities.produit.fields.stock'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.produit.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.produit.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
