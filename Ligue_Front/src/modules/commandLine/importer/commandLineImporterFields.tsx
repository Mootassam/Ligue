import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'product',
    label: i18n('entities.commandLine.fields.product'),
    schema: schemas.relationToOne(
      i18n('entities.commandLine.fields.product'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'quantity',
    label: i18n('entities.commandLine.fields.quantity'),
    schema: schemas.integer(
      i18n('entities.commandLine.fields.quantity'),
      {
        "required": true,
        "min": 1
      },
    ),
  },
  {
    name: 'subTotal',
    label: i18n('entities.commandLine.fields.subTotal'),
    schema: schemas.integer(
      i18n('entities.commandLine.fields.subTotal'),
      {
        "required": true
      },
    ),
  },
];