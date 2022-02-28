import list from "./list/votesListReducers";
import form from "./form/votesFormReducers";

import { combineReducers } from "redux";

export default combineReducers({
  list,
  form,
});
