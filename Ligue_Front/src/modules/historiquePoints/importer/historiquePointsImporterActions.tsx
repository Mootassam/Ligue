import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/historiquePoints/importer/historiquePointsImporterSelectors';
import HistoriquePointsService from 'src/modules/historiquePoints/historiquePointsService';
import fields from 'src/modules/historiquePoints/importer/historiquePointsImporterFields';
import { i18n } from 'src/i18n';

const historiquePointsImporterActions = importerActions(
  'HISTORIQUEPOINTS_IMPORTER',
  selectors,
  HistoriquePointsService.import,
  fields,
  i18n('entities.historiquePoints.importer.fileName'),
);

export default historiquePointsImporterActions;