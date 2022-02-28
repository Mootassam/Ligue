import list from 'src/modules/campagne/list/campagneListReducers';
import form from 'src/modules/campagne/form/campagneFormReducers';
import view from 'src/modules/campagne/view/campagneViewReducers';
import destroy from 'src/modules/campagne/destroy/campagneDestroyReducers';
import importerReducer from 'src/modules/campagne/importer/campagneImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
