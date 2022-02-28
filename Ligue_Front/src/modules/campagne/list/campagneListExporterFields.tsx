import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.campagne.fields.id'),
  },
  {
    name: 'titre',
    label: i18n('entities.campagne.fields.titre'),
  },
  {
    name: 'annee',
    label: i18n('entities.campagne.fields.annee'),
  },
  {
    name: 'datedebut',
    label: i18n('entities.campagne.fields.datedebut'),
  },
  {
    name: 'datefin',
    label: i18n('entities.campagne.fields.datefin'),
  },
  {
    name: 'statut',
    label: i18n('entities.campagne.fields.statut'),
  },
  {
    name: 'details',
    label: i18n('entities.campagne.fields.details'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.campagne.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.campagne.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
