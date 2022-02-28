import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/produit/importer/produitImporterSelectors';
import ProduitService from 'src/modules/produit/produitService';
import fields from 'src/modules/produit/importer/produitImporterFields';
import { i18n } from 'src/i18n';

const produitImporterActions = importerActions(
  'PRODUIT_IMPORTER',
  selectors,
  ProduitService.import,
  fields,
  i18n('entities.produit.importer.fileName'),
);

export default produitImporterActions;