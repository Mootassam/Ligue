import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import detailsCampagneEnumerators from 'src/modules/detailsCampagne/detailsCampagneEnumerators';

export default [
  {
    name: 'adherent',
    label: i18n('entities.detailsCampagne.fields.adherent'),
    schema: schemas.relationToOne(
      i18n('entities.detailsCampagne.fields.adherent'),
      {},
    ),
  },
  {
    name: 'palier',
    label: i18n('entities.detailsCampagne.fields.palier'),
    schema: schemas.relationToOne(
      i18n('entities.detailsCampagne.fields.palier'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'campagne',
    label: i18n('entitie.detailsCampagne.fields.campagne'),
    schema: schemas.relationToOne(
      i18n('entities.detailsCampagne.fields.campagne'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'titre',
    label: i18n('entitie.detailsCampagne.fields.titre'),
    schema: schemas.relationToOne(
      i18n('entities.detailsCampagne.fields.titre'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'statutPay',
    label: i18n('entities.detailsCampagne.fields.statutPay'),
    schema: schemas.enumerator(
      i18n('entities.detailsCampagne.fields.statutPay'),
      {
        "options": detailsCampagneEnumerators.statutPay
      },
    ),
  },
  {
    name: 'montant',
    label: i18n('entities.detailsCampagne.fields.montant'),
    schema: schemas.decimal(
      i18n('entities.detailsCampagne.fields.montant'),
      {},
    ),
  },
  {
    name: 'facture',
    label: i18n('entities.detailsCampagne.fields.facture'),
    schema: schemas.files(
      i18n('entities.detailsCampagne.fields.facture'),
      {},
    ),
  },
  {
    name: 'typePay',
    label: i18n('entities.detailsCampagne.fields.typePay'),
    schema: schemas.enumerator(
      i18n('entities.detailsCampagne.fields.typePay'),
      {
        "options": detailsCampagneEnumerators.typePay
      },
    ),
  },
];