import list from 'src/modules/dons/list/donsListReducers';
import form from 'src/modules/dons/form/donsFormReducers';
import view from 'src/modules/dons/view/donsViewReducers';
import destroy from 'src/modules/dons/destroy/donsDestroyReducers';
import importerReducer from 'src/modules/dons/importer/donsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
