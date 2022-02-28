import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.palier.fields.title'),
    schema: schemas.string(
      i18n('entities.palier.fields.title'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'montant',
    label: i18n('entities.palier.fields.montant'),
    schema: schemas.decimal(
      i18n('entities.palier.fields.montant'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'details',
    label: i18n('entities.palier.fields.details'),
    schema: schemas.string(
      i18n('entities.palier.fields.details'),
      {
        "required": true
      },
    ),
  },
];