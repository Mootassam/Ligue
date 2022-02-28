import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/campagne/importer/campagneImporterSelectors';
import CampagneService from 'src/modules/campagne/campagneService';
import fields from 'src/modules/campagne/importer/campagneImporterFields';
import { i18n } from 'src/i18n';

const campagneImporterActions = importerActions(
  'CAMPAGNE_IMPORTER',
  selectors,
  CampagneService.import,
  fields,
  i18n('entities.campagne.importer.fileName'),
);

export default campagneImporterActions;