import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import donsEnumerators from 'src/modules/dons/donsEnumerators';

export default [
  {
    name: 'adherent',
    label: i18n('entities.dons.fields.adherent'),
    schema: schemas.relationToOne(
      i18n('entities.dons.fields.adherent'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'projet',
    label: i18n('entitie.detailsCampagne.fields.projet'),
    schema: schemas.relationToOne(
      i18n('entities.detailsCampagne.fields.projet'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'montant',
    label: i18n('entities.dons.fields.montant'),
    schema: schemas.decimal(
      i18n('entities.dons.fields.montant'),
      {},
    ),
  },
  {
    name: 'typePaiement',
    label: i18n('entities.dons.fields.typePaiement'),
    schema: schemas.enumerator(
      i18n('entities.dons.fields.typePaiement'),
      {
        "required": true,
        "options": donsEnumerators.typePaiement
      },
    ),
  },
  {
    name: 'attachements',
    label: i18n('entities.dons.fields.attachements'),
    schema: schemas.images(
      i18n('entities.dons.fields.attachements'),
      {},
    ),
  },
];