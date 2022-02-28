import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'adherent',
    label: i18n('entities.votes.fields.adherent'),
    schema: schemas.relationToOne(
      i18n('entities.votes.fields.adherent'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'projet',
    label: i18n('entitie.projet.fields.projet'),
    schema: schemas.relationToOne(
      i18n('entities.projet.fields.projet'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'votes',
    label: i18n('entities.votes.fields.votes'),
    schema: schemas.integer(
      i18n('entities.votes.fields.votes'),
      {
        "max": 5,
        "required": true
      },
    ),
  },
];