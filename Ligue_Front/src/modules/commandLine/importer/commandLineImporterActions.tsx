import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/commandLine/importer/commandLineImporterSelectors';
import CommandLineService from 'src/modules/commandLine/commandLineService';
import fields from 'src/modules/commandLine/importer/commandLineImporterFields';
import { i18n } from 'src/i18n';

const commandLineImporterActions = importerActions(
  'COMMANDLINE_IMPORTER',
  selectors,
  CommandLineService.import,
  fields,
  i18n('entities.commandLine.importer.fileName'),
);

export default commandLineImporterActions;