import list from 'src/modules/produit/list/produitListReducers';
import form from 'src/modules/produit/form/produitFormReducers';
import view from 'src/modules/produit/view/produitViewReducers';
import destroy from 'src/modules/produit/destroy/produitDestroyReducers';
import importerReducer from 'src/modules/produit/importer/produitImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
