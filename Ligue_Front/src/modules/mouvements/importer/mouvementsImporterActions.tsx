import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/mouvements/importer/mouvementsImporterSelectors';
import MouvementsService from 'src/modules/mouvements/mouvementsService';
import fields from 'src/modules/mouvements/importer/mouvementsImporterFields';
import { i18n } from 'src/i18n';

const mouvementsImporterActions = importerActions(
  'MOUVEMENTS_IMPORTER',
  selectors,
  MouvementsService.import,
  fields,
  i18n('entities.mouvements.importer.fileName'),
);

export default mouvementsImporterActions;