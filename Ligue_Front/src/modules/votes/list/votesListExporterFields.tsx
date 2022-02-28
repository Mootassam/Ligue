import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.votes.fields.id'),
  },
  {
    name: 'adherent',
    label: i18n('entities.votes.fields.adherent'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'votes',
    label: i18n('entities.votes.fields.votes'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.votes.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.votes.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
