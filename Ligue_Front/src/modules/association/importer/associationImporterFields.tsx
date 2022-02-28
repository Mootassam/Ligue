import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nom',
    label: i18n('entities.association.fields.nom'),
    schema: schemas.string(
      i18n('entities.association.fields.nom'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.association.fields.description'),
    schema: schemas.string(
      i18n('entities.association.fields.description'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'adresse',
    label: i18n('entities.association.fields.adresse'),
    schema: schemas.string(
      i18n('entities.association.fields.adresse'),
      {},
    ),
  },
  {
    name: 'phone',
    label: i18n('entities.association.fields.phone'),
    schema: schemas.string(
      i18n('entities.association.fields.phone'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.association.fields.email'),
    schema: schemas.string(
      i18n('entities.association.fields.email'),
      {},
    ),
  },
  {
    name: 'tva',
    label: i18n('entities.association.fields.tva'),
    schema: schemas.string(
      i18n('entities.association.fields.tva'),
      {},
    ),
  },
];