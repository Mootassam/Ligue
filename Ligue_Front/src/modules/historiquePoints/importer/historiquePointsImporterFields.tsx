import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'adherent',
    label: i18n('entities.historiquePoints.fields.adherent'),
    schema: schemas.relationToOne(
      i18n('entities.historiquePoints.fields.adherent'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'points',
    label: i18n('entities.historiquePoints.fields.points'),
    schema: schemas.integer(
      i18n('entities.historiquePoints.fields.points'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'commentaire',
    label: i18n('entities.historiquePoints.fields.commentaire'),
    schema: schemas.string(
      i18n('entities.historiquePoints.fields.commentaire'),
      {},
    ),
  },
  {
    name: 'attachements',
    label: i18n('entities.historiquePoints.fields.attachements'),
    schema: schemas.files(
      i18n('entities.historiquePoints.fields.attachements'),
      {},
    ),
  },
];