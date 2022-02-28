import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.historiquePoints.fields.id'),
  },
  {
    name: 'adherent',
    label: i18n('entities.historiquePoints.fields.adherent'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'points',
    label: i18n('entities.historiquePoints.fields.points'),
  },
  {
    name: 'commentaire',
    label: i18n('entities.historiquePoints.fields.commentaire'),
  },
  {
    name: 'attachements',
    label: i18n('entities.historiquePoints.fields.attachements'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.historiquePoints.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.historiquePoints.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
