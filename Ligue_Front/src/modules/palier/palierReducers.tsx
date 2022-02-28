import list from 'src/modules/palier/list/palierListReducers';
import form from 'src/modules/palier/form/palierFormReducers';
import view from 'src/modules/palier/view/palierViewReducers';
import destroy from 'src/modules/palier/destroy/palierDestroyReducers';
import importerReducer from 'src/modules/palier/importer/palierImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
