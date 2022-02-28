import list from 'src/modules/association/list/associationListReducers';
import form from 'src/modules/association/form/associationFormReducers';
import view from 'src/modules/association/view/associationViewReducers';
import destroy from 'src/modules/association/destroy/associationDestroyReducers';
import importerReducer from 'src/modules/association/importer/associationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
