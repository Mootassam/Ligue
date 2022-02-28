import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.produitCommande.fields.id'),
  },
  {
    name: 'adherent',
    label: i18n('entities.produitCommande.fields.adherent'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'attachements',
    label: i18n('entities.produitCommande.fields.attachements'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'delivered',
    label: i18n('entities.produitCommande.fields.delivered'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'commandLine',
    label: i18n('entities.produitCommande.fields.commandLine'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.produitCommande.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.produitCommande.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
