import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import mouvementsEnumerators from 'src/modules/mouvements/mouvementsEnumerators';

export default [
  {
    name: 'typeMouv',
    label: i18n('entities.mouvements.fields.typeMouv'),
    schema: schemas.enumerator(
      i18n('entities.mouvements.fields.typeMouv'),
      {
        "required": true,
        "options": mouvementsEnumerators.typeMouv
      },
    ),
  },
  {
    name: 'categorie',
    label: i18n('entities.mouvements.fields.categorie'),
    schema: schemas.relationToOne(
      i18n('entities.mouvements.fields.categorie'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'titre',
    label: i18n('entities.mouvements.fields.titre'),
    schema: schemas.string(
      i18n('entities.mouvements.fields.titre'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'montant',
    label: i18n('entities.mouvements.fields.montant'),
    schema: schemas.decimal(
      i18n('entities.mouvements.fields.montant'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'attachements',
    label: i18n('entities.mouvements.fields.attachements'),
    schema: schemas.files(
      i18n('entities.mouvements.fields.attachements'),
      {},
    ),
  },
];