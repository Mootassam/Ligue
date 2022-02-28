import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/categorieMouv/importer/categorieMouvImporterSelectors';
import CategorieMouvService from 'src/modules/categorieMouv/categorieMouvService';
import fields from 'src/modules/categorieMouv/importer/categorieMouvImporterFields';
import { i18n } from 'src/i18n';

const categorieMouvImporterActions = importerActions(
  'CATEGORIEMOUV_IMPORTER',
  selectors,
  CategorieMouvService.import,
  fields,
  i18n('entities.categorieMouv.importer.fileName'),
);

export default categorieMouvImporterActions;