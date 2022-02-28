import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import campagneEnumerators from 'src/modules/campagne/campagneEnumerators';
import moment from 'moment';

export default [
  {
    name: 'titre',
    label: i18n('entities.campagne.fields.titre'),
    schema: schemas.string(
      i18n('entities.campagne.fields.titre'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'annee',
    label: i18n('entities.campagne.fields.annee'),
    schema: schemas.integer(
      i18n('entities.campagne.fields.annee'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'datedebut',
    label: i18n('entities.campagne.fields.datedebut'),
    schema: schemas.date(
      i18n('entities.campagne.fields.datedebut'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'datefin',
    label: i18n('entities.campagne.fields.datefin'),
    schema: schemas.date(
      i18n('entities.campagne.fields.datefin'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'statut',
    label: i18n('entities.campagne.fields.statut'),
    schema: schemas.enumerator(
      i18n('entities.campagne.fields.statut'),
      {
        "required": true,
        "options": campagneEnumerators.statut
      },
    ),
  },
  {
    name: 'details',
    label: i18n('entities.campagne.fields.details'),
    schema: schemas.relationToMany(
      i18n('entities.campagne.fields.details'),
      {},
    ),
  },
];