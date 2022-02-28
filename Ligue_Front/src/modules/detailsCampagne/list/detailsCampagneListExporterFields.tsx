import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.detailsCampagne.fields.id'),
  },
  {
    name: 'adherent',
    label: i18n('entities.detailsCampagne.fields.adherent'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'palier',
    label: i18n('entities.detailsCampagne.fields.palier'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'statutPay',
    label: i18n('entities.detailsCampagne.fields.statutPay'),
  },
  {
    name: 'montant',
    label: i18n('entities.detailsCampagne.fields.montant'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'facture',
    label: i18n('entities.detailsCampagne.fields.facture'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'typePay',
    label: i18n('entities.detailsCampagne.fields.typePay'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.detailsCampagne.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.detailsCampagne.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
