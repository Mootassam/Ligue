import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/produitCommande/importer/produitCommandeImporterSelectors';
import ProduitCommandeService from 'src/modules/produitCommande/produitCommandeService';
import fields from 'src/modules/produitCommande/importer/produitCommandeImporterFields';
import { i18n } from 'src/i18n';

const produitCommandeImporterActions = importerActions(
  'PRODUITCOMMANDE_IMPORTER',
  selectors,
  ProduitCommandeService.import,
  fields,
  i18n('entities.produitCommande.importer.fileName'),
);

export default produitCommandeImporterActions;