import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.association.fields.id'),
  },
  {
    name: 'nom',
    label: i18n('entities.association.fields.nom'),
  },
  {
    name: 'description',
    label: i18n('entities.association.fields.description'),
  },
  {
    name: 'adresse',
    label: i18n('entities.association.fields.adresse'),
  },
  {
    name: 'phone',
    label: i18n('entities.association.fields.phone'),
  },
  {
    name: 'email',
    label: i18n('entities.association.fields.email'),
  },
  {
    name: 'tva',
    label: i18n('entities.association.fields.tva'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.association.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.association.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
