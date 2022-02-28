import list from 'src/modules/produitCommande/list/produitCommandeListReducers';
import form from 'src/modules/produitCommande/form/produitCommandeFormReducers';
import view from 'src/modules/produitCommande/view/produitCommandeViewReducers';
import destroy from 'src/modules/produitCommande/destroy/produitCommandeDestroyReducers';
import importerReducer from 'src/modules/produitCommande/importer/produitCommandeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
