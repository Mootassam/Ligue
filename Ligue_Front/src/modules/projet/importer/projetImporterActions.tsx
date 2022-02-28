import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/projet/importer/projetImporterSelectors';
import ProjetService from 'src/modules/projet/projetService';
import fields from 'src/modules/projet/importer/projetImporterFields';
import { i18n } from 'src/i18n';

const projetImporterActions = importerActions(
  'PROJET_IMPORTER',
  selectors,
  ProjetService.import,
  fields,
  i18n('entities.projet.importer.fileName'),
);

export default projetImporterActions;