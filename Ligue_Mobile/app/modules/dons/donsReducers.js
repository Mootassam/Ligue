import list from "./list/donsListReducers";
import form from "./form/donsFormReducers";

import { combineReducers } from "redux";

export default combineReducers({
  list,
  form,
});
