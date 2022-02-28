import list from 'src/modules/categorieMouv/list/categorieMouvListReducers';
import form from 'src/modules/categorieMouv/form/categorieMouvFormReducers';
import view from 'src/modules/categorieMouv/view/categorieMouvViewReducers';
import destroy from 'src/modules/categorieMouv/destroy/categorieMouvDestroyReducers';
import importerReducer from 'src/modules/categorieMouv/importer/categorieMouvImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
