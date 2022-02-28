import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import association from 'src/modules/association/associationReducers';
import mandat from 'src/modules/mandat/mandatReducers';
import categorieMouv from 'src/modules/categorieMouv/categorieMouvReducers';
import mouvements from 'src/modules/mouvements/mouvementsReducers';
import campagne from 'src/modules/campagne/campagneReducers';
import detailsCampagne from 'src/modules/detailsCampagne/detailsCampagneReducers';
import palier from 'src/modules/palier/palierReducers';
import historiquePoints from 'src/modules/historiquePoints/historiquePointsReducers';
import projet from 'src/modules/projet/projetReducers';
import votes from 'src/modules/votes/votesReducers';
import dons from 'src/modules/dons/donsReducers';
import produitCategorie from 'src/modules/produitCategorie/produitCategorieReducers';
import produit from 'src/modules/produit/produitReducers';
import produitCommande from 'src/modules/produitCommande/produitCommandeReducers';
import commandLine from 'src/modules/commandLine/commandLineReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    association,
    mandat,
    categorieMouv,
    mouvements,
    campagne,
    detailsCampagne,
    palier,
    historiquePoints,
    projet,
    votes,
    dons,
    produitCategorie,
    produit,
    produitCommande,
    commandLine,
  });
