import list from 'src/modules/produitCategorie/list/produitCategorieListReducers';
import form from 'src/modules/produitCategorie/form/produitCategorieFormReducers';
import view from 'src/modules/produitCategorie/view/produitCategorieViewReducers';
import destroy from 'src/modules/produitCategorie/destroy/produitCategorieDestroyReducers';
import importerReducer from 'src/modules/produitCategorie/importer/produitCategorieImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
