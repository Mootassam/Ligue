import list from "./list/projetListReducers";
import view from "./view/projetViewReducers";

import { combineReducers } from "redux";
export default combineReducers({
  list,
  view,
});
