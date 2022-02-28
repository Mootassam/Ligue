import list from 'src/modules/projet/list/projetListReducers';
import form from 'src/modules/projet/form/projetFormReducers';
import view from 'src/modules/projet/view/projetViewReducers';
import destroy from 'src/modules/projet/destroy/projetDestroyReducers';
import importerReducer from 'src/modules/projet/importer/projetImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
