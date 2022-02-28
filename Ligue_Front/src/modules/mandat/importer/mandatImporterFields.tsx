import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'titre',
    label: i18n('entities.mandat.fields.titre'),
    schema: schemas.string(
      i18n('entities.mandat.fields.titre'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'startdate',
    label: i18n('entities.mandat.fields.startdate'),
    schema: schemas.date(
      i18n('entities.mandat.fields.startdate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'enddate',
    label: i18n('entities.mandat.fields.enddate'),
    schema: schemas.datetime(
      i18n('entities.mandat.fields.enddate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'pv',
    label: i18n('entities.mandat.fields.pv'),
    schema: schemas.files(
      i18n('entities.mandat.fields.pv'),
      {},
    ),
  },
  {
    name: 'members',
    label: i18n('entities.mandat.fields.members'),
    schema: schemas.relationToMany(
      i18n('entities.mandat.fields.members'),
      {
        "required": true,
        "min": 2
      },
    ),
  },
];