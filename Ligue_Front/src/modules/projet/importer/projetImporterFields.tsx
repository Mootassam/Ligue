import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import projetEnumerators from 'src/modules/projet/projetEnumerators';
import moment from 'moment';

export default [
  {
    name: 'titre',
    label: i18n('entities.projet.fields.titre'),
    schema: schemas.string(
      i18n('entities.projet.fields.titre'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.projet.fields.description'),
    schema: schemas.string(
      i18n('entities.projet.fields.description'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'details',
    label: i18n('entities.projet.fields.details'),
    schema: schemas.string(
      i18n('entities.projet.fields.details'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'typeProjet',
    label: i18n('entities.projet.fields.typeProjet'),
    schema: schemas.enumerator(
      i18n('entities.projet.fields.typeProjet'),
      {
        "required": true,
        "options": projetEnumerators.typeProjet
      },
    ),
  },
  {
    name: 'statutProjet',
    label: i18n('entities.projet.fields.statutProjet'),
    schema: schemas.enumerator(
      i18n('entities.projet.fields.statutProjet'),
      {
        "required": true,
        "options": projetEnumerators.statutProjet
      },
    ),
  },
  {
    name: 'photoPrincipal',
    label: i18n('entities.projet.fields.photoPrincipal'),
    schema: schemas.images(
      i18n('entities.projet.fields.photoPrincipal'),
      {},
    ),
  },
  {
    name: 'budget',
    label: i18n('entities.projet.fields.budget'),
    schema: schemas.decimal(
      i18n('entities.projet.fields.budget'),
      {},
    ),
  },
  {
    name: 'lieu',
    label: i18n('entities.projet.fields.lieu'),
    schema: schemas.string(
      i18n('entities.projet.fields.lieu'),
      {},
    ),
  },
  {
    name: 'dateDebutProjet',
    label: i18n('entities.projet.fields.dateDebutProjet'),
    schema: schemas.datetime(
      i18n('entities.projet.fields.dateDebutProjet'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'dateFinProjet',
    label: i18n('entities.projet.fields.dateFinProjet'),
    schema: schemas.datetime(
      i18n('entities.projet.fields.dateFinProjet'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'dateDebutDon',
    label: i18n('entities.projet.fields.dateDebutDon'),
    schema: schemas.date(
      i18n('entities.projet.fields.dateDebutDon'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'dateFinDon',
    label: i18n('entities.projet.fields.dateFinDon'),
    schema: schemas.date(
      i18n('entities.projet.fields.dateFinDon'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'photos',
    label: i18n('entities.projet.fields.photos'),
    schema: schemas.images(
      i18n('entities.projet.fields.photos'),
      {},
    ),
  },
  {
    name: 'attachements',
    label: i18n('entities.projet.fields.attachements'),
    schema: schemas.files(
      i18n('entities.projet.fields.attachements'),
      {},
    ),
  },
  {
    name: 'votes',
    label: i18n('entities.projet.fields.votes'),
    schema: schemas.relationToMany(
      i18n('entities.projet.fields.votes'),
      {},
    ),
  },
  {
    name: 'dons',
    label: i18n('entities.projet.fields.dons'),
    schema: schemas.relationToMany(
      i18n('entities.projet.fields.dons'),
      {},
    ),
  },
];