import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/palier/importer/palierImporterSelectors';
import PalierService from 'src/modules/palier/palierService';
import fields from 'src/modules/palier/importer/palierImporterFields';
import { i18n } from 'src/i18n';

const palierImporterActions = importerActions(
  'PALIER_IMPORTER',
  selectors,
  PalierService.import,
  fields,
  i18n('entities.palier.importer.fileName'),
);

export default palierImporterActions;