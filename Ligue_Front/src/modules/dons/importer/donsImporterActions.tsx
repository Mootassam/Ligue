import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dons/importer/donsImporterSelectors';
import DonsService from 'src/modules/dons/donsService';
import fields from 'src/modules/dons/importer/donsImporterFields';
import { i18n } from 'src/i18n';

const donsImporterActions = importerActions(
  'DONS_IMPORTER',
  selectors,
  DonsService.import,
  fields,
  i18n('entities.dons.importer.fileName'),
);

export default donsImporterActions;