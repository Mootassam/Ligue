import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'titre',
    label: i18n('entities.produitCategorie.fields.titre'),
    schema: schemas.string(
      i18n('entities.produitCategorie.fields.titre'),
      {
        "required": true
      },
    ),
  },
];