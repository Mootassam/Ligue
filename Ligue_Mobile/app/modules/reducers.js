import { combineReducers } from "redux";
import authReducers from "./auth/authReducers";
import detailsCampagne from "./detailsCampagne/detailsCampagneReducers";
import dons from "./dons/donsReducers";
import historiquePoints from "./historiquePoints/historiquePointsReducers";
import produitCommande from "./produitCommande/produitCommandeReducers";
import settingsReducers from "./settings/settingsReducers";
import votes from "./votes/votesReducers";
import project from "./project/projetReducers";
export default combineReducers({
  authReducers,
  detailsCampagne,
  dons,
  historiquePoints,
  produitCommande,
  votes,
  settingsReducers,
  project,
});
