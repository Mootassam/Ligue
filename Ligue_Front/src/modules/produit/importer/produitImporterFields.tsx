import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'titre',
    label: i18n('entities.produit.fields.titre'),
    schema: schemas.string(
      i18n('entities.produit.fields.titre'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.produit.fields.description'),
    schema: schemas.string(
      i18n('entities.produit.fields.description'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'publish',
    label: i18n('entities.produit.fields.publish'),
    schema: schemas.boolean(
      i18n('entities.produit.fields.publish'),
      {},
    ),
  },
  {
    name: 'prix',
    label: i18n('entities.produit.fields.prix'),
    schema: schemas.decimal(
      i18n('entities.produit.fields.prix'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'photos',
    label: i18n('entities.produit.fields.photos'),
    schema: schemas.images(
      i18n('entities.produit.fields.photos'),
      {
        "required": true,
        "min": 1,
        "max": 4
      },
    ),
  },
  {
    name: 'stock',
    label: i18n('entities.produit.fields.stock'),
    schema: schemas.integer(
      i18n('entities.produit.fields.stock'),
      {
        "min": 0,
        "required": true
      },
    ),
  },
];