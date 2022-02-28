import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.dons.fields.id'),
  },
  {
    name: 'adherent',
    label: i18n('entities.dons.fields.adherent'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'montant',
    label: i18n('entities.dons.fields.montant'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'typePaiement',
    label: i18n('entities.dons.fields.typePaiement'),
  },
  {
    name: 'attachements',
    label: i18n('entities.dons.fields.attachements'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.dons.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.dons.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
