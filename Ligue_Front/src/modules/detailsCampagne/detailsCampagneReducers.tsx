import list from 'src/modules/detailsCampagne/list/detailsCampagneListReducers';
import form from 'src/modules/detailsCampagne/form/detailsCampagneFormReducers';
import view from 'src/modules/detailsCampagne/view/detailsCampagneViewReducers';
import destroy from 'src/modules/detailsCampagne/destroy/detailsCampagneDestroyReducers';
import importerReducer from 'src/modules/detailsCampagne/importer/detailsCampagneImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
