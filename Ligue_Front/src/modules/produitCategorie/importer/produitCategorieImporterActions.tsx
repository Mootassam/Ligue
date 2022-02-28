import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/produitCategorie/importer/produitCategorieImporterSelectors';
import ProduitCategorieService from 'src/modules/produitCategorie/produitCategorieService';
import fields from 'src/modules/produitCategorie/importer/produitCategorieImporterFields';
import { i18n } from 'src/i18n';

const produitCategorieImporterActions = importerActions(
  'PRODUITCATEGORIE_IMPORTER',
  selectors,
  ProduitCategorieService.import,
  fields,
  i18n('entities.produitCategorie.importer.fileName'),
);

export default produitCategorieImporterActions;