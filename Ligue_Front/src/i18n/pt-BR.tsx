const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    association: {
        name: 'Association',
        label: 'Associations',
        menu: 'Associations',
        exporterFileName: 'Association_exportados',
        list: {
          menu: 'Associations',
          title: 'Associations',
        },
        create: {
          success: 'Association salvo com sucesso',
        },
        update: {
          success: 'Association salvo com sucesso',
        },
        destroy: {
          success: 'Association deletado com sucesso',
        },
        destroyAll: {
          success: 'Association(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Association',
        },
        fields: {
          id: 'Id',
          'nom': 'Nom',
          'description': 'Description',
          'adresse': 'Adresse',
          'phone': 'Mobile',
          'email': 'Email',
          'tva': 'Code TVA',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Association',
        },
        view: {
          title: 'Visualizar Association',
        },
        importer: {
          title: 'Importar Associations',
          fileName: 'association_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    mandat: {
        name: 'Mandat',
        label: 'Mandats',
        menu: 'Mandats',
        exporterFileName: 'Mandat_exportados',
        list: {
          menu: 'Mandats',
          title: 'Mandats',
        },
        create: {
          success: 'Mandat salvo com sucesso',
        },
        update: {
          success: 'Mandat salvo com sucesso',
        },
        destroy: {
          success: 'Mandat deletado com sucesso',
        },
        destroyAll: {
          success: 'Mandat(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Mandat',
        },
        fields: {
          id: 'Id',
          'titre': 'Titre',
          'startdateRange': 'Date Début',
          'startdate': 'Date Début',
          'enddateRange': 'Date Fin',
          'enddate': 'Date Fin',
          'pv': 'Pv',
          'members': 'Membres élus',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'titre': 'Title',
        },
        hints: {
          'titre': 'Title',
        },
        new: {
          title: 'Novo Mandat',
        },
        view: {
          title: 'Visualizar Mandat',
        },
        importer: {
          title: 'Importar Mandats',
          fileName: 'mandat_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    categorieMouv: {
        name: 'CategorieMouv',
        label: 'CategorieMouvs',
        menu: 'CategorieMouvs',
        exporterFileName: 'CategorieMouv_exportados',
        list: {
          menu: 'CategorieMouvs',
          title: 'CategorieMouvs',
        },
        create: {
          success: 'CategorieMouv salvo com sucesso',
        },
        update: {
          success: 'CategorieMouv salvo com sucesso',
        },
        destroy: {
          success: 'CategorieMouv deletado com sucesso',
        },
        destroyAll: {
          success: 'CategorieMouv(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar CategorieMouv',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'description': 'Description',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo CategorieMouv',
        },
        view: {
          title: 'Visualizar CategorieMouv',
        },
        importer: {
          title: 'Importar CategorieMouvs',
          fileName: 'categorieMouv_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    mouvements: {
        name: 'Mouvements',
        label: 'Mouvements',
        menu: 'Mouvements',
        exporterFileName: 'Mouvements_exportados',
        list: {
          menu: 'Mouvements',
          title: 'Mouvements',
        },
        create: {
          success: 'Mouvements salvo com sucesso',
        },
        update: {
          success: 'Mouvements salvo com sucesso',
        },
        destroy: {
          success: 'Mouvements deletado com sucesso',
        },
        destroyAll: {
          success: 'Mouvements(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Mouvements',
        },
        fields: {
          id: 'Id',
          'typeMouv': 'TypeMouvement',
          'categorie': 'Categorie',
          'titre': 'Titre',
          'montantRange': 'Montant',
          'montant': 'Montant',
          'attachements': 'Attachements',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'typeMouv': {
            'entree': 'Entree',
            'sortie': 'Sortie',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Mouvements',
        },
        view: {
          title: 'Visualizar Mouvements',
        },
        importer: {
          title: 'Importar Mouvements',
          fileName: 'mouvements_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    campagne: {
        name: 'Campagne',
        label: 'Campagnes',
        menu: 'Campagnes',
        exporterFileName: 'Campagne_exportados',
        list: {
          menu: 'Campagnes',
          title: 'Campagnes',
        },
        create: {
          success: 'Campagne salvo com sucesso',
        },
        update: {
          success: 'Campagne salvo com sucesso',
        },
        destroy: {
          success: 'Campagne deletado com sucesso',
        },
        destroyAll: {
          success: 'Campagne(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Campagne',
        },
        fields: {
          id: 'Id',
          'titre': 'Titre',
          'anneeRange': 'Année',
          'annee': 'Année',
          'datedebutRange': 'Datedebut',
          'datedebut': 'Datedebut',
          'datefinRange': 'Datefin',
          'datefin': 'Datefin',
          'statut': 'Statut',
          'details': 'Details',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'statut': {
            'en_cours': 'En_cours',
            'termine': 'Termine',
            'annule': 'Annule',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Campagne',
        },
        view: {
          title: 'Visualizar Campagne',
        },
        importer: {
          title: 'Importar Campagnes',
          fileName: 'campagne_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    detailsCampagne: {
        name: 'DetailsCampagne',
        label: 'DetailsCampagnes',
        menu: 'DetailsCampagnes',
        exporterFileName: 'DetailsCampagne_exportados',
        list: {
          menu: 'DetailsCampagnes',
          title: 'DetailsCampagnes',
        },
        create: {
          success: 'DetailsCampagne salvo com sucesso',
        },
        update: {
          success: 'DetailsCampagne salvo com sucesso',
        },
        destroy: {
          success: 'DetailsCampagne deletado com sucesso',
        },
        destroyAll: {
          success: 'DetailsCampagne(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar DetailsCampagne',
        },
        fields: {
          id: 'Id',
          'adherent': 'Adherent',
          'palier': 'Palier',
          'statutPay': 'Statut de paiement',
          'montantRange': 'Montant',
          'montant': 'Montant',
          'facture': 'Facture',
          'typePay': 'TypePay',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'statutPay': {
            'paye': 'Paye',
            'non_paye': 'Non_paye',
          },
          'typePay': {
            'paymee': 'Paymee',
            'cb': 'Cb',
            'virement': 'Virement',
            'especes': 'Especes',
          },
        },
        placeholders: {
          'adherent': 'Adherent',
        },
        hints: {
          'adherent': 'Adherent',
        },
        new: {
          title: 'Novo DetailsCampagne',
        },
        view: {
          title: 'Visualizar DetailsCampagne',
        },
        importer: {
          title: 'Importar DetailsCampagnes',
          fileName: 'detailsCampagne_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    palier: {
        name: 'Palier',
        label: 'Paliers',
        menu: 'Paliers',
        exporterFileName: 'Palier_exportados',
        list: {
          menu: 'Paliers',
          title: 'Paliers',
        },
        create: {
          success: 'Palier salvo com sucesso',
        },
        update: {
          success: 'Palier salvo com sucesso',
        },
        destroy: {
          success: 'Palier deletado com sucesso',
        },
        destroyAll: {
          success: 'Palier(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Palier',
        },
        fields: {
          id: 'Id',
          'title': 'Titre',
          'montantRange': 'Montant',
          'montant': 'Montant',
          'details': 'Details',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Palier',
        },
        view: {
          title: 'Visualizar Palier',
        },
        importer: {
          title: 'Importar Paliers',
          fileName: 'palier_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    historiquePoints: {
        name: 'HistoriquePoints',
        label: 'HistoriquePoints',
        menu: 'HistoriquePoints',
        exporterFileName: 'HistoriquePoints_exportados',
        list: {
          menu: 'HistoriquePoints',
          title: 'HistoriquePoints',
        },
        create: {
          success: 'HistoriquePoints salvo com sucesso',
        },
        update: {
          success: 'HistoriquePoints salvo com sucesso',
        },
        destroy: {
          success: 'HistoriquePoints deletado com sucesso',
        },
        destroyAll: {
          success: 'HistoriquePoints(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar HistoriquePoints',
        },
        fields: {
          id: 'Id',
          'adherent': 'Adherent',
          'pointsRange': 'Points',
          'points': 'Points',
          'commentaire': 'Commentaire',
          'attachements': 'Attachements',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo HistoriquePoints',
        },
        view: {
          title: 'Visualizar HistoriquePoints',
        },
        importer: {
          title: 'Importar HistoriquePoints',
          fileName: 'historiquePoints_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    projet: {
        name: 'Projet',
        label: 'Projets',
        menu: 'Projets',
        exporterFileName: 'Projet_exportados',
        list: {
          menu: 'Projets',
          title: 'Projets',
        },
        create: {
          success: 'Projet salvo com sucesso',
        },
        update: {
          success: 'Projet salvo com sucesso',
        },
        destroy: {
          success: 'Projet deletado com sucesso',
        },
        destroyAll: {
          success: 'Projet(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Projet',
        },
        fields: {
          id: 'Id',
          'titre': 'Titre',
          'description': 'Description',
          'details': 'Details',
          'typeProjet': 'Type',
          'statutProjet': 'Statut',
          'photoPrincipal': 'PhotoPrincipal',
          'budgetRange': 'Budget',
          'budget': 'Budget',
          'lieu': 'Lieu',
          'dateDebutProjetRange': 'DateDebutProjet',
          'dateDebutProjet': 'DateDebutProjet',
          'dateFinProjetRange': 'DateFinProjet',
          'dateFinProjet': 'DateFinProjet',
          'dateDebutDonRange': 'DateDebutDon',
          'dateDebutDon': 'DateDebutDon',
          'dateFinDonRange': 'DateFinDon',
          'dateFinDon': 'DateFinDon',
          'photos': 'Photos',
          'attachements': 'Attachements',
          'votes': 'Votes',
          'dons': 'Dons',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'typeProjet': {
            'idee': 'Idee',
            'projet_ligue': 'Projet_ligue',
            'projet_ca': 'Projet_ca',
          },
          'statutProjet': {
            'draft': 'Draft',
            'actif': 'Actif',
            'canceled': 'Canceled',
            'closed': 'Closed',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Projet',
        },
        view: {
          title: 'Visualizar Projet',
        },
        importer: {
          title: 'Importar Projets',
          fileName: 'projet_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    votes: {
        name: 'Votes',
        label: 'Votes',
        menu: 'Votes',
        exporterFileName: 'Votes_exportados',
        list: {
          menu: 'Votes',
          title: 'Votes',
        },
        create: {
          success: 'Votes salvo com sucesso',
        },
        update: {
          success: 'Votes salvo com sucesso',
        },
        destroy: {
          success: 'Votes deletado com sucesso',
        },
        destroyAll: {
          success: 'Votes(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Votes',
        },
        fields: {
          id: 'Id',
          'adherent': 'Adherent',
          'votesRange': 'Votes',
          'votes': 'Votes',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Votes',
        },
        view: {
          title: 'Visualizar Votes',
        },
        importer: {
          title: 'Importar Votes',
          fileName: 'votes_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    dons: {
        name: 'Dons',
        label: 'Dons',
        menu: 'Dons',
        exporterFileName: 'Dons_exportados',
        list: {
          menu: 'Dons',
          title: 'Dons',
        },
        create: {
          success: 'Dons salvo com sucesso',
        },
        update: {
          success: 'Dons salvo com sucesso',
        },
        destroy: {
          success: 'Dons deletado com sucesso',
        },
        destroyAll: {
          success: 'Dons(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Dons',
        },
        fields: {
          id: 'Id',
          'adherent': 'Adherent',
          'montantRange': 'Montant',
          'montant': 'Montant',
          'typePaiement': 'TypePaiement',
          'attachements': 'Attachements',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'typePaiement': {
            'paymee': 'Paymee',
            'cb': 'Cb',
            'virement': 'Virement',
            'especes': 'Especes',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Dons',
        },
        view: {
          title: 'Visualizar Dons',
        },
        importer: {
          title: 'Importar Dons',
          fileName: 'dons_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    produitCategorie: {
        name: 'ProduitCategorie',
        label: 'ProduitCategories',
        menu: 'ProduitCategories',
        exporterFileName: 'ProduitCategorie_exportados',
        list: {
          menu: 'ProduitCategories',
          title: 'ProduitCategories',
        },
        create: {
          success: 'ProduitCategorie salvo com sucesso',
        },
        update: {
          success: 'ProduitCategorie salvo com sucesso',
        },
        destroy: {
          success: 'ProduitCategorie deletado com sucesso',
        },
        destroyAll: {
          success: 'ProduitCategorie(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar ProduitCategorie',
        },
        fields: {
          id: 'Id',
          'titre': 'Titre',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo ProduitCategorie',
        },
        view: {
          title: 'Visualizar ProduitCategorie',
        },
        importer: {
          title: 'Importar ProduitCategories',
          fileName: 'produitCategorie_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    produit: {
        name: 'Produit',
        label: 'Produits',
        menu: 'Produits',
        exporterFileName: 'Produit_exportados',
        list: {
          menu: 'Produits',
          title: 'Produits',
        },
        create: {
          success: 'Produit salvo com sucesso',
        },
        update: {
          success: 'Produit salvo com sucesso',
        },
        destroy: {
          success: 'Produit deletado com sucesso',
        },
        destroyAll: {
          success: 'Produit(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Produit',
        },
        fields: {
          id: 'Id',
          'titre': 'Titre',
          'description': 'Description',
          'publish': 'Publiee',
          'prixRange': 'Prix',
          'prix': 'Prix',
          'photos': 'Photos',
          'stockRange': 'Stock',
          'stock': 'Stock',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Produit',
        },
        view: {
          title: 'Visualizar Produit',
        },
        importer: {
          title: 'Importar Produits',
          fileName: 'produit_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    produitCommande: {
        name: 'ProduitCommande',
        label: 'ProduitCommandes',
        menu: 'ProduitCommandes',
        exporterFileName: 'ProduitCommande_exportados',
        list: {
          menu: 'ProduitCommandes',
          title: 'ProduitCommandes',
        },
        create: {
          success: 'ProduitCommande salvo com sucesso',
        },
        update: {
          success: 'ProduitCommande salvo com sucesso',
        },
        destroy: {
          success: 'ProduitCommande deletado com sucesso',
        },
        destroyAll: {
          success: 'ProduitCommande(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar ProduitCommande',
        },
        fields: {
          id: 'Id',
          'adherent': 'Adherent',
          'produits': 'Produits',
          'quantiteRange': 'Quantite',
          'quantite': 'Quantite',
          'attachements': 'Attachements',
          'delivered': 'Delivered',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo ProduitCommande',
        },
        view: {
          title: 'Visualizar ProduitCommande',
        },
        importer: {
          title: 'Importar ProduitCommandes',
          fileName: 'produitCommande_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Escuro',
      light: 'Claro',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    items_per_page: '/ página',
    jump_to: 'Vá até',
    jump_to_confirm: 'confirme',
    page: '',

    prev_page: 'Página anterior',
    next_page: 'Próxima página',
    prev_5: '5 páginas anteriores',
    next_5: '5 próximas páginas',
    prev_3: '3 páginas anteriores',
    next_3: '3 próximas páginas',
  },
};

export default ptBR;
