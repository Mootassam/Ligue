import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'adherent',
    label: i18n('entities.produitCommande.fields.adherent'),
    schema: schemas.relationToOne(
      i18n('entities.produitCommande.fields.adherent'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'attachements',
    label: i18n('entities.produitCommande.fields.attachements'),
    schema: schemas.files(
      i18n('entities.produitCommande.fields.attachements'),
      {},
    ),
  },
  {
    name: 'delivered',
    label: i18n('entities.produitCommande.fields.delivered'),
    schema: schemas.boolean(
      i18n('entities.produitCommande.fields.delivered'),
      {},
    ),
  },
  {
    name: 'commandLine',
    label: i18n('entities.produitCommande.fields.commandLine'),
    schema: schemas.relationToMany(
      i18n('entities.produitCommande.fields.commandLine'),
      {
        "required": true
      },
    ),
  },
];