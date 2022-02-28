import list from 'src/modules/mouvements/list/mouvementsListReducers';
import form from 'src/modules/mouvements/form/mouvementsFormReducers';
import view from 'src/modules/mouvements/view/mouvementsViewReducers';
import destroy from 'src/modules/mouvements/destroy/mouvementsDestroyReducers';
import importerReducer from 'src/modules/mouvements/importer/mouvementsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
