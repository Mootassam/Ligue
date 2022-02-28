import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/association/importer/associationImporterSelectors';
import AssociationService from 'src/modules/association/associationService';
import fields from 'src/modules/association/importer/associationImporterFields';
import { i18n } from 'src/i18n';

const associationImporterActions = importerActions(
  'ASSOCIATION_IMPORTER',
  selectors,
  AssociationService.import,
  fields,
  i18n('entities.association.importer.fileName'),
);

export default associationImporterActions;