import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/detailsCampagne/importer/detailsCampagneImporterSelectors';
import DetailsCampagneService from 'src/modules/detailsCampagne/detailsCampagneService';
import fields from 'src/modules/detailsCampagne/importer/detailsCampagneImporterFields';
import { i18n } from 'src/i18n';

const detailsCampagneImporterActions = importerActions(
  'DETAILSCAMPAGNE_IMPORTER',
  selectors,
  DetailsCampagneService.import,
  fields,
  i18n('entities.detailsCampagne.importer.fileName'),
);

export default detailsCampagneImporterActions;