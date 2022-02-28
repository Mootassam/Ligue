import Permissions from 'src/security/permissions';
import config from 'src/config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },
  {
    path: '/Adhesion',
    loader: () =>
    import('src/view/user/list/UserAdhesionListPage'),
    permissionRequired: permissions.detailsCampagneRead,
    exact: true,
  },
  {
    path: '/user-votes',
    loader: () =>
      import('src/view/user/list/UserVotesListPage'),
    permissionRequired: permissions.votesRead,
    exact: true,
  },
  {
    path: '/user-dons',
    loader: () =>
      import('src/view/user/list/UserDonsListPage'),
    permissionRequired: permissions.donsRead,
    exact: true,
  },

  {
    path: '/user-produit-commande',
    loader: () =>
      import('src/view/user/list/UserProduitCommandeListPage'),
    permissionRequired: permissions.produitCommandeRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserDetails'),
    permissionRequired: permissions.userRead,
    exact: true,
  },
  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/association',
    loader: () =>
      import('src/view/association/list/AssociationListPage'),
    permissionRequired: permissions.associationRead,
    exact: true,
  },
  {
    path: '/association/new',
    loader: () =>
      import('src/view/association/form/AssociationFormPage'),
    permissionRequired: permissions.associationCreate,
    exact: true,
  },
  {
    path: '/association/importer',
    loader: () =>
      import(
        'src/view/association/importer/AssociationImporterPage'
      ),
    permissionRequired: permissions.associationImport,
    exact: true,
  },
  {
    path: '/association/:id/edit',
    loader: () =>
      import('src/view/association/form/AssociationFormPage'),
    permissionRequired: permissions.associationEdit,
    exact: true,
  },
  {
    path: '/association/:id',
    loader: () =>
      import('src/view/association/view/AssociationViewPage'),
    permissionRequired: permissions.associationRead,
    exact: true,
  },

  {
    path: '/mandat',
    loader: () =>
      import('src/view/mandat/list/MandatListPage'),
    permissionRequired: permissions.mandatRead,
    exact: true,
  },
  {
    path: '/mandat/new',
    loader: () =>
      import('src/view/mandat/form/MandatFormPage'),
    permissionRequired: permissions.mandatCreate,
    exact: true,
  },
  {
    path: '/mandat/importer',
    loader: () =>
      import(
        'src/view/mandat/importer/MandatImporterPage'
      ),
    permissionRequired: permissions.mandatImport,
    exact: true,
  },
  {
    path: '/mandat/:id/edit',
    loader: () =>
      import('src/view/mandat/form/MandatFormPage'),
    permissionRequired: permissions.mandatEdit,
    exact: true,
  },
  {
    path: '/mandat/:id',
    loader: () =>
      import('src/view/mandat/view/MandatViewPage'),
    permissionRequired: permissions.mandatRead,
    exact: true,
  },

  {
    path: '/categorie-mouv',
    loader: () =>
      import('src/view/categorieMouv/list/CategorieMouvListPage'),
    permissionRequired: permissions.categorieMouvRead,
    exact: true,
  },
  {
    path: '/categorie-mouv/new',
    loader: () =>
      import('src/view/categorieMouv/form/CategorieMouvFormPage'),
    permissionRequired: permissions.categorieMouvCreate,
    exact: true,
  },
  {
    path: '/categorie-mouv/importer',
    loader: () =>
      import(
        'src/view/categorieMouv/importer/CategorieMouvImporterPage'
      ),
    permissionRequired: permissions.categorieMouvImport,
    exact: true,
  },
  {
    path: '/categorie-mouv/:id/edit',
    loader: () =>
      import('src/view/categorieMouv/form/CategorieMouvFormPage'),
    permissionRequired: permissions.categorieMouvEdit,
    exact: true,
  },
  {
    path: '/categorie-mouv/:id',
    loader: () =>
      import('src/view/categorieMouv/view/CategorieMouvViewPage'),
    permissionRequired: permissions.categorieMouvRead,
    exact: true,
  },

  {
    path: '/mouvements',
    loader: () =>
      import('src/view/mouvements/list/MouvementsListPage'),
    permissionRequired: permissions.mouvementsRead,
    exact: true,
  },
  {
    path: '/mouvements/new',
    loader: () =>
      import('src/view/mouvements/form/MouvementsFormPage'),
    permissionRequired: permissions.mouvementsCreate,
    exact: true,
  },
  {
    path: '/mouvements/importer',
    loader: () =>
      import(
        'src/view/mouvements/importer/MouvementsImporterPage'
      ),
    permissionRequired: permissions.mouvementsImport,
    exact: true,
  },
  {
    path: '/mouvements/:id/edit',
    loader: () =>
      import('src/view/mouvements/form/MouvementsFormPage'),
    permissionRequired: permissions.mouvementsEdit,
    exact: true,
  },
  {
    path: '/mouvements/:id',
    loader: () =>
      import('src/view/mouvements/view/MouvementsViewPage'),
    permissionRequired: permissions.mouvementsRead,
    exact: true,
  },

  {
    path: '/campagne',
    loader: () =>
      import('src/view/campagne/list/CampagneListPage'),
    permissionRequired: permissions.campagneRead,
    exact: true,
  },
  {
    path: '/campagne/new',
    loader: () =>
      import('src/view/campagne/form/CampagneFormPage'),
    permissionRequired: permissions.campagneCreate,
    exact: true,
  },
  {
    path: '/campagne/importer',
    loader: () =>
      import(
        'src/view/campagne/importer/CampagneImporterPage'
      ),
    permissionRequired: permissions.campagneImport,
    exact: true,
  },
  {
    path: '/campagne/:id/edit',
    loader: () =>
      import('src/view/campagne/form/CampagneFormPage'),
    permissionRequired: permissions.campagneEdit,
    exact: true,
  },
  {
    path: '/campagne/:id',
    loader: () =>
      import('src/view/campagne/view/CampagneViewPage'),
    permissionRequired: permissions.campagneRead,
    exact: true,
  },

  {
    path: '/details-campagne',
    loader: () =>
    import('src/view/detailsCampagne/list/DetailsCampagneListPage'),
    permissionRequired: permissions.detailsCampagneRead,
    exact: true,
  },
 
  {
    path: '/details-campagne/:id',
    loader: () =>
      import('src/view/detailsCampagne/view/DetailsCampagneViewPage'),
    permissionRequired: permissions.detailsCampagneRead,
    exact: true,
  },
  {
    path: '/details-campagne/new',
    loader: () =>
      import('src/view/detailsCampagne/form/DetailsCampagneFormPage'),
    permissionRequired: permissions.detailsCampagneCreate,
    exact: true,
  },
  {
    path: '/details-campagne/:id/new',
    loader: () =>
      import('src/view/detailsCampagne/form/DetailsCampagneFormModal'),
    permissionRequired: permissions.detailsCampagneCreate,
    exact: true,
  },
  {
    path: '/details-campagne/importer',
    loader: () =>
      import(
        'src/view/detailsCampagne/importer/DetailsCampagneImporterPage'
      ),
    permissionRequired: permissions.detailsCampagneImport,
    exact: true,
  },
  {
    path: '/details-campagne/:id/edit',
    loader: () =>
      import('src/view/detailsCampagne/form/DetailsCampagneFormPage'),
    permissionRequired: permissions.detailsCampagneEdit,
    exact: true,
  },
  {
    path: '/palier',
    loader: () =>
      import('src/view/palier/list/PalierListPage'),
    permissionRequired: permissions.palierRead,
    exact: true,
  },
  {
    path: '/palier/new',
    loader: () =>
      import('src/view/palier/form/PalierFormPage'),
    permissionRequired: permissions.palierCreate,
    exact: true,
  },
  {
    path: '/palier/:id/new',
    loader: () =>
      import('src/view/palier/form/PalierFormPage'),
    permissionRequired: permissions.palierCreate,
    exact: true,
  },
  {
    path: '/palier/importer',
    loader: () =>
      import(
        'src/view/palier/importer/PalierImporterPage'
      ),
    permissionRequired: permissions.palierImport,
    exact: true,
  },
  {
    path: '/palier/:id/edit',
    loader: () =>
      import('src/view/palier/form/PalierFormPage'),
    permissionRequired: permissions.palierEdit,
    exact: true,
  },
  {
    path: '/palier/:id',
    loader: () =>
      import('src/view/palier/view/PalierViewPage'),
    permissionRequired: permissions.palierRead,
    exact: true,
  },

  {
    path: '/historique-points',
    loader: () =>
      import('src/view/historiquePoints/list/HistoriquePointsListPage'),
    permissionRequired: permissions.historiquePointsRead,
    exact: true,
  },
  {
    path: '/historique-points/new',
    loader: () =>
      import('src/view/historiquePoints/form/HistoriquePointsFormPage'),
    permissionRequired: permissions.historiquePointsCreate,
    exact: true,
  },
  {
    path: '/historique-points/importer',
    loader: () =>
      import(
        'src/view/historiquePoints/importer/HistoriquePointsImporterPage'
      ),
    permissionRequired: permissions.historiquePointsImport,
    exact: true,
  },
  {
    path: '/historique-points/:id/edit',
    loader: () =>
      import('src/view/historiquePoints/form/HistoriquePointsFormPage'),
    permissionRequired: permissions.historiquePointsEdit,
    exact: true,
  },
  {
    path: '/historique-points/:id',
    loader: () =>
      import('src/view/historiquePoints/view/HistoriquePointsViewPage'),
    permissionRequired: permissions.historiquePointsRead,
    exact: true,
  },

  {
    path: '/projet',
    loader: () =>
      import('src/view/projet/list/ProjetListPage'),
    permissionRequired: permissions.projetRead,
    exact: true,
  },
  {
    path: '/projet/new',
    loader: () =>
      import('src/view/projet/form/ProjetFormPage'),
    permissionRequired: permissions.projetCreate,
    exact: true,
  },
  {
    path: '/projet/importer',
    loader: () =>
      import(
        'src/view/projet/importer/ProjetImporterPage'
      ),
    permissionRequired: permissions.projetImport,
    exact: true,
  },
  {
    path: '/projet/:id/edit',
    loader: () =>
      import('src/view/projet/form/ProjetFormPage'),
    permissionRequired: permissions.projetEdit,
    exact: true,
  },
  {
    path: '/projet/:id',
    loader: () =>
      import('src/view/projet/view/ProjetDetails'),
    permissionRequired: permissions.projetRead,
    exact: true,
  },

  {
    path: '/votes',
    loader: () =>
      import('src/view/votes/list/VotesListPage'),
    permissionRequired: permissions.votesRead,
    exact: true,
  },
  {
    path: '/votes/new',
    loader: () =>
      import('src/view/votes/form/VotesFormPage'),
    permissionRequired: permissions.votesCreate,
    exact: true,
  },
  {
    path: '/votes/importer',
    loader: () =>
      import(
        'src/view/votes/importer/VotesImporterPage'
      ),
    permissionRequired: permissions.votesImport,
    exact: true,
  },
  {
    path: '/votes/:id/edit',
    loader: () =>
      import('src/view/votes/form/VotesFormPage'),
    permissionRequired: permissions.votesEdit,
    exact: true,
  },
  {
    path: '/votes/:id',
    loader: () =>
      import('src/view/votes/view/VotesViewPage'),
    permissionRequired: permissions.votesRead,
    exact: true,
  },

  {
    path: '/dons',
    loader: () =>
      import('src/view/dons/list/DonsListPage'),
    permissionRequired: permissions.donsRead,
    exact: true,
  },
 
  {
    path: '/dons/new',
    loader: () =>
      import('src/view/dons/form/DonsFormPage'),
    permissionRequired: permissions.donsCreate,
    exact: true,
  },
  {
    path: '/dons/:id/new',
    loader: () =>
      import('src/view/dons/form/DonsFormModal'),
    permissionRequired: permissions.detailsCampagneCreate,
    exact: true,
  },
  {
    path: '/dons/importer',
    loader: () =>
      import(
        'src/view/dons/importer/DonsImporterPage'
      ),
    permissionRequired: permissions.donsImport,
    exact: true,
  },
  {
    path: '/dons/:id/edit',
    loader: () =>
      import('src/view/dons/form/DonsFormPage'),
    permissionRequired: permissions.donsEdit,
    exact: true,
  },
  {
    path: '/dons/:id',
    loader: () =>
      import('src/view/dons/view/DonsViewPage'),
    permissionRequired: permissions.donsRead,
    exact: true,
  },

  {
    path: '/produit-categorie',
    loader: () =>
      import('src/view/produitCategorie/list/ProduitCategorieListPage'),
    permissionRequired: permissions.produitCategorieRead,
    exact: true,
  },
  {
    path: '/produit-categorie/new',
    loader: () =>
      import('src/view/produitCategorie/form/ProduitCategorieFormPage'),
    permissionRequired: permissions.produitCategorieCreate,
    exact: true,
  },
  {
    path: '/produit-categorie/importer',
    loader: () =>
      import(
        'src/view/produitCategorie/importer/ProduitCategorieImporterPage'
      ),
    permissionRequired: permissions.produitCategorieImport,
    exact: true,
  },
  {
    path: '/produit-categorie/:id/edit',
    loader: () =>
      import('src/view/produitCategorie/form/ProduitCategorieFormPage'),
    permissionRequired: permissions.produitCategorieEdit,
    exact: true,
  },
  {
    path: '/produit-categorie/:id',
    loader: () =>
      import('src/view/produitCategorie/view/ProduitCategorieViewPage'),
    permissionRequired: permissions.produitCategorieRead,
    exact: true,
  },

  {
    path: '/produit',
    loader: () =>
      import('src/view/produit/list/ProduitListPage'),
    permissionRequired: permissions.produitRead,
    exact: true,
  },
  {
    path: '/produit/new',
    loader: () =>
      import('src/view/produit/form/ProduitFormPage'),
    permissionRequired: permissions.produitCreate,
    exact: true,
  },
  {
    path: '/produit/importer',
    loader: () =>
      import(
        'src/view/produit/importer/ProduitImporterPage'
      ),
    permissionRequired: permissions.produitImport,
    exact: true,
  },
  {
    path: '/produit/:id/edit',
    loader: () =>
      import('src/view/produit/form/ProduitFormPage'),
    permissionRequired: permissions.produitEdit,
    exact: true,
  },
  {
    path: '/produit/:id',
    loader: () =>
      import('src/view/produit/view/ProduitViewPage'),
    permissionRequired: permissions.produitRead,
    exact: true,
  },

  {
    path: '/produit-commande',
    loader: () =>
      import('src/view/produitCommande/list/ProduitCommandeListPage'),
    permissionRequired: permissions.produitCommandeRead,
    exact: true,
  },
  {
    path: '/produit-commande/new',
    loader: () =>
      import('src/view/produitCommande/form/ProduitCommandeFormPage'),
    permissionRequired: permissions.produitCommandeCreate,
    exact: true,
  },
  {
    path: '/produit-commande/importer',
    loader: () =>
      import(
        'src/view/produitCommande/importer/ProduitCommandeImporterPage'
      ),
    permissionRequired: permissions.produitCommandeImport,
    exact: true,
  },
  {
    path: '/produit-commande/:id/edit',
    loader: () =>
      import('src/view/produitCommande/form/ProduitCommandeFormPage'),
    permissionRequired: permissions.produitCommandeEdit,
    exact: true,
  },
  {
    path: '/produit-commande/:id',
    loader: () =>
      import('src/view/produitCommande/view/ProduitCommandeViewPage'),
    permissionRequired: permissions.produitCommandeRead,
    exact: true,
  },
  {
    path: '/command-line',
    loader: () =>
      import('src/view/commandLine/list/CommandLineListPage'),
    permissionRequired: permissions.commandLineRead,
    exact: true,
  },
  {
    path: '/command-line/new',
    loader: () =>
      import('src/view/commandLine/form/CommandLineFormPage'),
    permissionRequired: permissions.commandLineCreate,
    exact: true,
  },
  {
    path: '/command-line/importer',
    loader: () =>
      import(
        'src/view/commandLine/importer/CommandLineImporterPage'
      ),
    permissionRequired: permissions.commandLineImport,
    exact: true,
  },
  {
    path: '/command-line/:id/edit',
    loader: () =>
      import('src/view/commandLine/form/CommandLineFormPage'),
    permissionRequired: permissions.commandLineEdit,
    exact: true,
  },
  {
    path: '/command-line/:id',
    loader: () =>
      import('src/view/commandLine/view/CommandLineViewPage'),
    permissionRequired: permissions.commandLineRead,
    exact: true,
  },
  
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
