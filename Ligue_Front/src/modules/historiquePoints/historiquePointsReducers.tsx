import list from 'src/modules/historiquePoints/list/historiquePointsListReducers';
import form from 'src/modules/historiquePoints/form/historiquePointsFormReducers';
import view from 'src/modules/historiquePoints/view/historiquePointsViewReducers';
import destroy from 'src/modules/historiquePoints/destroy/historiquePointsDestroyReducers';
import importerReducer from 'src/modules/historiquePoints/importer/historiquePointsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
