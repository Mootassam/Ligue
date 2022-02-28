import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.mandat.fields.id'),
  },
  {
    name: 'titre',
    label: i18n('entities.mandat.fields.titre'),
  },
  {
    name: 'startdate',
    label: i18n('entities.mandat.fields.startdate'),
  },
  {
    name: 'enddate',
    label: i18n('entities.mandat.fields.enddate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'pv',
    label: i18n('entities.mandat.fields.pv'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'members',
    label: i18n('entities.mandat.fields.members'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.mandat.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.mandat.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
