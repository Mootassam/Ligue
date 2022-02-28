import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.mouvements.fields.id'),
  },
  {
    name: 'typeMouv',
    label: i18n('entities.mouvements.fields.typeMouv'),
  },
  {
    name: 'categorie',
    label: i18n('entities.mouvements.fields.categorie'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'titre',
    label: i18n('entities.mouvements.fields.titre'),
  },
  {
    name: 'montant',
    label: i18n('entities.mouvements.fields.montant'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'attachements',
    label: i18n('entities.mouvements.fields.attachements'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.mouvements.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.mouvements.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
