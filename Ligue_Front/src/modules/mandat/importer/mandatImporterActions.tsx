import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/mandat/importer/mandatImporterSelectors';
import MandatService from 'src/modules/mandat/mandatService';
import fields from 'src/modules/mandat/importer/mandatImporterFields';
import { i18n } from 'src/i18n';

const mandatImporterActions = importerActions(
  'MANDAT_IMPORTER',
  selectors,
  MandatService.import,
  fields,
  i18n('entities.mandat.importer.fileName'),
);

export default mandatImporterActions;