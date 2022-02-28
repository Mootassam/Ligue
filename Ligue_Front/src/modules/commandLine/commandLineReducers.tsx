import list from 'src/modules/commandLine/list/commandLineListReducers';
import form from 'src/modules/commandLine/form/commandLineFormReducers';
import view from 'src/modules/commandLine/view/commandLineViewReducers';
import destroy from 'src/modules/commandLine/destroy/commandLineDestroyReducers';
import importerReducer from 'src/modules/commandLine/importer/commandLineImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
