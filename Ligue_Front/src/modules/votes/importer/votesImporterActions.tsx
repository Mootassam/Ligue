import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/votes/importer/votesImporterSelectors';
import VotesService from 'src/modules/votes/votesService';
import fields from 'src/modules/votes/importer/votesImporterFields';
import { i18n } from 'src/i18n';

const votesImporterActions = importerActions(
  'VOTES_IMPORTER',
  selectors,
  VotesService.import,
  fields,
  i18n('entities.votes.importer.fileName'),
);

export default votesImporterActions;