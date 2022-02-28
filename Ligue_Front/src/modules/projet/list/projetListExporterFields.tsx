import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.projet.fields.id'),
  },
  {
    name: 'titre',
    label: i18n('entities.projet.fields.titre'),
  },
  {
    name: 'description',
    label: i18n('entities.projet.fields.description'),
  },
  {
    name: 'details',
    label: i18n('entities.projet.fields.details'),
  },
  {
    name: 'typeProjet',
    label: i18n('entities.projet.fields.typeProjet'),
  },
  {
    name: 'statutProjet',
    label: i18n('entities.projet.fields.statutProjet'),
  },
  {
    name: 'photoPrincipal',
    label: i18n('entities.projet.fields.photoPrincipal'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'budget',
    label: i18n('entities.projet.fields.budget'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'lieu',
    label: i18n('entities.projet.fields.lieu'),
  },
  {
    name: 'dateDebutProjet',
    label: i18n('entities.projet.fields.dateDebutProjet'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'dateFinProjet',
    label: i18n('entities.projet.fields.dateFinProjet'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'dateDebutDon',
    label: i18n('entities.projet.fields.dateDebutDon'),
  },
  {
    name: 'dateFinDon',
    label: i18n('entities.projet.fields.dateFinDon'),
  },
  {
    name: 'photos',
    label: i18n('entities.projet.fields.photos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'attachements',
    label: i18n('entities.projet.fields.attachements'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'votes',
    label: i18n('entities.projet.fields.votes'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'dons',
    label: i18n('entities.projet.fields.dons'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.projet.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.projet.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
