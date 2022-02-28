import list from 'src/modules/votes/list/votesListReducers';
import form from 'src/modules/votes/form/votesFormReducers';
import view from 'src/modules/votes/view/votesViewReducers';
import destroy from 'src/modules/votes/destroy/votesDestroyReducers';
import importerReducer from 'src/modules/votes/importer/votesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
