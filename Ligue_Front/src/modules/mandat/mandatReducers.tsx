import list from 'src/modules/mandat/list/mandatListReducers';
import form from 'src/modules/mandat/form/mandatFormReducers';
import view from 'src/modules/mandat/view/mandatViewReducers';
import destroy from 'src/modules/mandat/destroy/mandatDestroyReducers';
import importerReducer from 'src/modules/mandat/importer/mandatImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
