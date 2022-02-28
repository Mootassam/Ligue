const es = {
  common: {
    or: 'Ou',
    cancel: 'Annuler',
    reset: 'Initialiser',
    save: 'Enregistrer',
    search: 'Rechercher',
    edit: 'Éditer',
    remove: 'Supprimer',
    new: 'Nouveau',
    addVote: 'Nouveau Vote',
    addFund: 'Nouveau Don',
    export: 'Exporter vers Excel',
    noDataToExport: 'Aucune donnée à exporter',
    import: 'Importer',
    discard: 'Ignorer',
    yes: 'Confirmer',
    no: 'Non',
    pause: 'Pause',
    areYouSure: 'Êtes-vous sûr de supprimer?',
    view: 'Afficher',
    destroy: 'Supprimer',
    mustSelectARow: 'Vous devez sélectionner une ligne',
    start: 'Début',
    end: 'Fin',
    select: 'Sélectionnez',
    continue: 'Continue',
    filters: 'Filtres',
    quantityError: 'La quantité doit être inférieure au stock',
    administration: 'Administration',
    membership: 'Adhésion',
    shop: 'Boutique',
    accounting: 'Comptabilité',
    createdBy: 'Créé par'

  },
  app: {
    title: 'Ligue Digitale',
  },

  api: {
    menu: 'API',
  },

  entities: {
    association: {
      name: 'Association',
      label: 'Associations',
      menu: 'Associations',
      exporterFileName: 'export_association',
      list: {
        menu: 'Associations',
        title: 'Associations',
      },
      create: {
        success: 'Association enregistrée avec succès',
      },
      update: {
        success: 'Association enregistrée avec succès',
      },
      destroy: {
        success: 'Association supprimée avec succès',
      },
      destroyAll: {
        success: 'Association(s) supprimée(s) avec succès',
      },
      edit: {
        title: 'Modifier Association',
      },
      fields: {
        id: 'Id',
        'nom': 'Nom',
        'description': 'Description',
        'adresse': 'Adresse',
        'phone': 'Mobile',
        'email': 'Email',
        'tva': 'Code TVA',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouvelle Association',
      },
      view: {
        title: 'Voir Association',
      },
      importer: {
        title: 'Importer Associations',
        fileName: 'association_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    mandat: {
      name: 'Mandat',
      label: 'Mandats',
      menu: 'Mandats',
      exporterFileName: 'export_mandat',
      list: {
        menu: 'Mandats',
        title: 'Mandats',
      },
      create: {
        success: 'Mandat enregistré avec succès',
      },
      update: {
        success: 'Mandat enregistré avec succès',
      },
      destroy: {
        success: 'Mandat supprimée avec succès',
      },
      destroyAll: {
        success: 'Mandat(s) supprimée(s) avec succès',
      },
      edit: {
        title: 'Modifier Mandat',
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
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {

      },
      placeholders: {
        'titre': 'Titre',
      },
      hints: {
        'titre': 'Titre',
      },
      new: {
        title: 'Nouveau Mandat',
      },
      view: {
        title: 'Voir Mandat',
      },
      importer: {
        title: 'Importer Mandats',
        fileName: 'mandat_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    categorieMouv: {
      name: 'Catégorie',
      label: 'Catégorie',
      menu: 'Catégorie',
      exporterFileName: 'export_Categorie_du_Mouvement',
      list: {
        menu: 'Catégorie',
        title: 'Catégorie',
      },
      create: {
        success: 'Catégorie enregistré avec succès',
      },
      update: {
        success: 'Catégorie enregistré avec succès',
      },
      destroy: {
        success: 'Catégorie supprimée avec succès',
      },
      destroyAll: {
        success: 'Catégorie(s) supprimée avec succès',
      },
      edit: {
        title: 'Modifier Catégorie',
      },
      fields: {
        id: 'Id',
        'title': 'Titre',
        'description': 'Description',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouvelle Catégorie',
      },
      view: {
        title: 'Voir Catégorie',
      },
      importer: {
        title: 'Importer Catégorie',
        fileName: 'Categorie_du_Mouvement_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    mouvements: {
      name: 'Mouvements',
      label: 'Mouvements',
      menu: 'Mouvements',
      exporterFileName: 'export_mouvements',
      list: {
        menu: 'Mouvements',
        title: 'Mouvements',
      },
      create: {
        success: 'Mouvements enregistré avec succès',
      },
      update: {
        success: 'Mouvements enregistré avec succès',
      },
      destroy: {
        success: 'Mouvements supprimée avec succès',
      },
      destroyAll: {
        success: 'Mouvements(s) supprimée avec succès',
      },
      edit: {
        title: 'Modifier Mouvements',
      },
      fields: {
        id: 'Id',
        'typeMouv': 'Type',
        'categorie': 'Catégorie',
        'titre': 'Titre',
        'montantRange': 'Montant',
        'montant': 'Montant',
        'attachements': 'Attachements',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        'typeMouv': {
          'entree': 'Entrée',
          'sortie': 'Sortie',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouveaux Mouvements',
      },
      view: {
        title: 'Voir Mouvements',
      },
      importer: {
        title: 'Importer Mouvements',
        fileName: 'mouvements_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    campagne: {
      confirm: `Êtes-vous sûr de supprimer?

      Les données relatives au campagne seront supprimées aussi,
      cette action est irréversible.`,
      name: 'Campagne',
      label: 'Campagnes',
      menu: 'Campagnes',
      exporterFileName: 'export_campagne',
      list: {
        menu: 'Campagnes',
        title: 'Campagnes',
      },
      create: {
        success: 'Campagne enregistrée avec succès',
      },
      update: {
        success: 'Campagne enregistrée avec succès',
      },
      destroy: {
        success: 'Campagne supprimée avec succès',
      },
      destroyAll: {
        success: 'Campagne(s) supprimée(s) avec succès',
      },
      edit: {
        title: 'Modifier Campagne',
      },
      fields: {
        id: 'Id',
        'titre': 'Titre',
        'anneeRange': 'Année',
        'annee': 'Année',
        'datedebutRange': 'Date début',
        'datedebut': 'Date début',
        'datefinRange': 'Date fin',
        'datefin': 'Date fin',
        'statut': 'Statut',
        'details': 'Détails',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        'statut': {
          'en_cours': 'En cours',
          'termine': 'Terminée',
          'annule': 'Annulée',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouvelle Campagne',
      },
      view: {
        title: 'Voir Campagne',
      },
      importer: {
        title: 'Importer Campagnes',
        fileName: 'campagne_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    detailsCampagne: {
      name: 'Adhésions de Campagne',
      label: 'Adhésions des Campagnes',
      menu: 'Adhésions des Campagnes',
      exporterFileName: 'export_membership_Campagne',
      list: {
        menu: 'Adhésions des Campagnes',
        title: 'Adhésions des Campagnes',
      },
      create: {
        success: 'Adhésions de Campagne enregistré avec succès',
      },
      update: {
        success: 'Adhésions de Campagne enregistré avec succès',
      },
      destroy: {
        success: 'Adhésions de Campagne supprimé avec succès',
      },
      destroyAll: {
        success: 'Adhésions de Campagne(s) supprimé(s) avec succès',
      },
      edit: {
        title: 'Modifier Adhésions de Campagne',
      },
      fields: {
        id: 'Id',
        'adherent': 'Adhérent',
        'palier': 'Palier',
        'statutPay': 'Statut de paiement',
        'montantRange': 'Montant',
        'montant': 'Montant',
        'facture': 'Facture',
        'typePay': 'Type de Paiement',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        'statutPay': {
          'paye': 'Payé',
          'non_paye': 'Non_Payé',
        },
        'typePay': {
          'paymee': 'Paymee',
          'cb': 'Carte Bancaire',
          'virement': 'Virement',
          'especes': 'Espèces',
        },
      },
      placeholders: {
        'adherent': 'Adhérent',
      },
      hints: {
        'adherent': 'Adhérent',
      },
      new: {
        title: 'Nouvelle Adhésion',
      },
      view: {
        title: 'Voir Adhésion',
      },
      importer: {
        title: 'Importer Adhésions des Campagnes',
        fileName: 'details_Campagne_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    palier: {
      name: 'Palier',
      label: 'Paliers',
      menu: 'Paliers',
      exporterFileName: 'export_palier',
      list: {
        menu: 'Paliers',
        title: 'Paliers',
      },
      create: {
        success: 'Palier enregistré avec succès',
      },
      update: {
        success: 'Palier enregistré avec succès',
      },
      destroy: {
        success: 'Palier supprimé avec succès',
      },
      destroyAll: {
        success: 'Palier(s) supprimé(s) avec succès',
      },
      edit: {
        title: 'Modifier Palier',
      },
      fields: {
        id: 'Id',
        'title': 'Titre',
        'montantRange': 'Montant',
        'montant': 'Montant',
        'details': 'Détails',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouveau Palier',
      },
      view: {
        title: 'Voir Palier',
      },
      importer: {
        title: 'Importer Paliers',
        fileName: 'palier_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    historiquePoints: {
      name: 'Gamification',
      label: 'Gamification',
      menu: 'Gamification',
      exporterFileName: 'export_historique_Points',
      list: {
        menu: 'Gamification',
        title: 'Gamification',
      },
      create: {
        success: 'Gamification enregistré avec succès',
      },
      update: {
        success: 'Gamification enregistré avec succès',
      },
      destroy: {
        success: 'Gamification supprimée avec succès',
      },
      destroyAll: {
        success: 'Gamification(s) supprimé(s) avec succès',
      },
      edit: {
        title: 'Modifier Gamification',
      },
      fields: {
        id: 'Id',
        'adherent': 'Adhérent',
        'pointsRange': 'Points',
        'points': 'Points',
        'commentaire': 'Commentaire',
        'attachements': 'Attachements',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouveau Gamification',
      },
      view: {
        title: 'Voir Gamification',
      },
      importer: {
        title: 'Importer Gamification',
        fileName: 'historique_Points_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    projet: {
      name: 'Projet',
      label: 'Projets',
      menu: 'Projets',
      exporterFileName: 'export_projet',
      list: {
        menu: 'Projets',
        title: 'Projets',
      },
      create: {
        success: 'Projet enregistré avec succès',
      },
      update: {
        success: 'Projet enregistré avec succès',
      },
      destroy: {
        success: 'Projet supprimé avec succès',
      },
      destroyAll: {
        success: 'Projet(s) supprimé(s) avec succès',
      },
      edit: {
        title: 'Modifier Projet',
      },
      fields: {
        id: 'Id',
        'titre': 'Titre',
        'description': 'Description',
        'details': 'Détails',
        'typeProjet': 'Type',
        'statutProjet': 'Statut',
        'photoPrincipal': 'Photo Principal',
        'budgetRange': 'Budget',
        'budget': 'Budget',
        'lieu': 'Lieu',
        'dateDebutProjetRange': 'Date Début Projet',
        'dateDebutProjet': 'Date Début Projet',
        'dateFinProjetRange': 'Date Fin Projet',
        'dateFinProjet': 'Date Fin Projet',
        'dateDebutDonRange': 'Date Début Don',
        'dateDebutDon': 'Date Début Don',
        'dateFinDonRange': 'Date Fin Don',
        'dateFinDon': 'Date Fin Don',
        'photos': 'Photos',
        'attachements': 'Attachements',
        'votes': 'Votes',
        'dons': 'Dons',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        'typeProjet': {
          'idee': 'Idée',
          'projet_ligue': 'Projet ligue',
          'projet_ca': 'Projet CA',
        },
        'statutProjet': {
          'draft': 'Brouillon',
          'actif': 'Actif',
          'canceled': 'Annulé',
          'closed': 'Fermé',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouveau Projet',
      },
      view: {
        title: 'Voir Projet',
      },
      importer: {
        title: 'Importer Projets',
        fileName: 'projet_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    votes: {
      name: 'Votes',
      label: 'Votes',
      menu: 'Votes',
      exporterFileName: 'export_votes',
      list: {
        menu: 'Votes',
        title: 'Votes',
      },
      create: {
        success: 'Votes enregistré avec succès',
      },
      update: {
        success: 'Votes enregistré avec succès',
      },
      destroy: {
        success: 'Votes supprimée avec succès',
      },
      destroyAll: {
        success: 'Votes(s) supprimé(s) avec succès',
      },
      edit: {
        title: 'Modifier Votes',
      },
      fields: {
        id: 'Id',
        'adherent': 'Adhérent',
        'votesRange': 'Votes',
        'votes': 'Votes',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouveaux Votes',
      },
      view: {
        title: 'Voir Votes',
      },
      importer: {
        title: 'Importer Votes',
        fileName: 'votes_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    dons: {
      name: 'Dons',
      label: 'Dons',
      menu: 'Dons',
      exporterFileName: 'export_dons',
      list: {
        menu: 'Dons',
        title: 'Dons',
      },
      create: {
        success: 'Dons enregistré avec succès',
      },
      update: {
        success: 'Dons enregistré avec succès',
      },
      destroy: {
        success: 'Dons supprimé avec succès',
      },
      destroyAll: {
        success: 'Dons(s) supprimée(s) avec succès',
      },
      edit: {
        title: 'Modifier Dons',
      },
      fields: {
        id: 'Id',
        'adherent': 'Adhérent',
        'montantRange': 'Montant',
        'montant': 'Montant',
        'typePaiement': 'Type de Paiement',
        'attachements': 'Attachements',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        'typePaiement': {
          'paymee': 'Paymee',
          'cb': 'Carte Bancaire',
          'virement': 'Virement',
          'especes': 'Espèces',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouveaux Dons',
      },
      view: {
        title: 'Voir Dons',
      },
      importer: {
        title: 'Importer Dons',
        fileName: 'dons_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    produitCategorie: {
      name: 'Catégorie',
      label: 'Catégories',
      menu: 'Catégories',
      exporterFileName: 'export_produitCategorie',
      list: {
        menu: 'Catégories',
        title: 'Catégories',
      },
      create: {
        success: 'Catégorie enregistré avec succès',
      },
      update: {
        success: 'Catégorie enregistré avec succès',
      },
      destroy: {
        success: 'Catégorie supprimée avec succès',
      },
      destroyAll: {
        success: 'Catégorie(s) supprimée(s) avec succès',
      },
      edit: {
        title: 'Modifier Catégorie',
      },
      fields: {
        id: 'Id',
        'titre': 'Titre',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouvelle Catégorie',
      },
      view: {
        title: 'Voir Catégorie',
      },
      importer: {
        title: 'Importer Catégories',
        fileName: 'produitCategorie_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    produit: {
      name: 'Produit',
      label: 'Produits',
      menu: 'Produits',
      exporterFileName: 'export_produit',
      list: {
        menu: 'Produits',
        title: 'Produits',
      },
      create: {
        success: 'Produit enregistré avec succès',
      },
      update: {
        success: 'Produit enregistré avec succès',
      },
      destroy: {
        success: 'Produit supprimé avec succès',
      },
      destroyAll: {
        success: 'Produit(s) supprimé(s) avec succès',
      },
      edit: {
        title: 'Modifier Produit',
      },
      fields: {
        id: 'Id',
        'titre': 'Titre',
        'description': 'Description',
        'publish': 'Publié',
        'stockable': 'Stockable',
        'prixRange': 'Prix (DT)',
        'prix': 'Prix (DT)',
        'photos': 'Photos',
        'stockRange': 'Stock',
        'stock': 'Stock',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
        categorie: 'Catégorie',
        quantity: 'Quantité',
        subTotal: 'Sous Total (DT)',
        total: 'Total (DT)'
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouveau Produit',
      },
      view: {
        title: 'Voir Produit',
      },
      importer: {
        title: 'Importer Produits',
        fileName: 'produit_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },

    produitCommande: {
      name: 'Commande',
      label: 'Commandes',
      menu: 'Commandes',
      exporterFileName: 'export_produit_Commande',
      list: {
        menu: 'Commandes',
        title: 'Commandes',
      },
      create: {
        success: 'Commande enregistré avec succès',
      },
      update: {
        success: 'Commande enregistré avec succès',
      },
      destroy: {
        success: 'Commande supprimée avec succès',
      },
      destroyAll: {
        success: 'Commande(s) supprimée(s) avec succès',
      },
      edit: {
        title: 'Modifier Commande',
      },
      fields: {
        id: 'Id',
        'adherent': 'Adhérent',
        'produits': 'Produits',
        'quantiteRange': 'Quantité',
        'quantite': 'Quantité',
        'commandLine': 'Ligne de commande',
        'attachements': 'Attachements',
        'delivered': 'Livré',
        total: 'Total (DT)',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouvelle Commande',
      },
      view: {
        title: 'Voir Commande',
      },
      importer: {
        title: 'Importer Commandes',
        fileName: 'produit_Commande_import_template',
        hint:
          "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace.",
      },
    },
    commandLine: {
      name: 'Ligne de commande',
      label: 'Lignes de commande',
      menu: 'Lignes de commande',
      exporterFileName: 'command_Line_export',
      list: {
        menu: 'Lignes de commande',
        title: 'Lignes de commande',
      },
      create: {
        success: 'Ligne de commande enregistré avec succès',
      },
      update: {
        success: 'Ligne de commande enregistré avec succès',
      },
      destroy: {
        success: 'Ligne de commande supprimée avec succès',
      },
      destroyAll: {
        success: 'Ligne de commande(s) supprimée(s) avec succès',
      },
      edit: {
        title: 'Edit Ligne de commande',
      },
      fields: {
        id: 'Id',
        'product': 'Produit',
        'quantityRange': 'Quantité',
        'quantity': 'Quantité',
        'subTotalRange': 'Sous Total (DT)',
        'subTotal': 'Sous Total (DT)',
        createdAt: 'Créé le',
        updatedAt: 'Modifié le ',
        createdAtRange: 'Créé le',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'Nouvelle Ligne de commande',
      },
      view: {
        title: 'Voir Ligne de commande',
      },
      importer: {
        title: 'Import Lignes de commande',
        fileName: 'command_Line_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },
  auth: {
    tenants: 'Espaces de travail',
    profile: {
      title: 'Profil',
      success: 'Mise à jour du profil réussie',
      fullForm: 'Les informations de votre profil ne sont pas complètes',
    },
    createAnAccount: 'Créer un compte',
    rememberMe: 'Se souvenir du mot de passe',
    forgotPassword: 'Avez-vous oublié votre mot de passe',
    signin: 'Ouvrir Une session',
    signup: "S'inscrire",
    signout: 'Déconnecter ',
    alreadyHaveAnAccount:
      'Avez-vous déjà un compte? Connexion.',
    social: {
      errors: {
        'auth-invalid-provider':
          "Cet e-mail est déjà enregistré auprès d'un autre fournisseur.",
        'auth-no-email': `L'email associé à ce compte est privé ou inexistant.`,
      },
    },
    signinWithAnotherAccount:
      'Connectez-vous avec un autre compte',
    passwordChange: {
      title: 'Changer le mot de passe',
      success: 'Le mot de passe a été changé avec succès',
      mustMatch: 'Les mots de passe doivent correspondre',
    },
    emailUnverified: {
      message:
        'Veuillez confirmer votre adresse e-mail sur <strong> {0} </strong> pour continuer.',
      submit: 'Renvoyer la vérification par e-mail',
    },
    emptyPermissions: {
      message:
        "Vous n'avez pas encore d'autorisations. Attendez que l'administrateur vous accorde des privilèges.",
    },
    inactive: {
      message:
        "Votre compte est désactivé, veuillez contacter l'administration.",
    },
    passwordResetEmail: {
      message:
        'Envoyer un e-mail de réinitialisation de mot de passe',
      error: 'E-mail non reconnu',
    },
    passwordReset: {
      message: 'Réinitialisez votre mot de passe',
    },
    emailAddressVoirificationEmail: {
      error: 'E-mail non reconnu',
    },
    verificationEmailSuccess:
      'E-mail de vérification envoyé avec succès',
    passwordResetEmailSuccess:
      'E-mail de réinitialisation du mot de passe envoyé avec succès',
    passwordResetSuccess:
      'Le mot de passe a été changé avec succès',
    verifyEmail: {
      success: 'E-mail vérifié avec succès.',
      message:
        'Un instant, votre email est en cours de vérification...',
    },
  },
  tenant: {
    name: 'tenant',
    label: 'Espaces de travail',
    menu: 'Espaces de travail',
    list: {
      menu: 'Espaces de travail',
      title: 'Espaces de travail',
    },
    create: {
      button: 'Créer un espace de travail',
      success: 'Espace de travail enregistré avec succès',
    },
    update: {
      success: 'Espace de travail enregistré avec succès',
    },
    destroy: {
      success: 'Espace de travail supprimé avec succès',
    },
    destroyAll: {
      success:
        'Espace(s) de travail supprimé(s) avec succès',
    },
    edit: {
      title: "Modifier l'espace de travail",
    },
    fields: {
      id: 'Id',
      name: 'Nom',
      url: 'URL',
      tenantName: "Nom de l'espace de travail",
      tenantId: 'Espace de travail',
      tenantUrl: "URL d'espace de travail",
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nouvelle Espace de travail',
    },
    invitation: {
      view: 'Voir invitations',
      invited: 'Invité',
      accept: "Accepter l'invitation",
      decline: "Refuser l'invitation",
      declined: 'Invitation refusée avec succès',
      acceptWrongEmail:
        "Accepter l'invitation avec cet e-mail",
    },
    select: "Sélectionner l'espace de travail",
    validation: {
      url:
        "L'URL de votre Espace de travail ne peut contenir que des lettres minuscules, des chiffres et des tirets (et doit commencer par une lettre ou un chiffre).",
    },
  },
  roles: {
    admin: {
      label: 'Admin',
      description: 'Accès complet à toutes les ressources.',
    },
    membre: {
      label: 'Membre',
      description: 'Full access to all resources',
    },
    adhérent: {
      label: 'Adhérent',
      description: 'Full access to all resources',
    },
    sponsor: {
      label: 'Sponseur',
      description: 'Full access to all resources',
    },
    partenaire: {
      label: 'Partenaire',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Rôle personnalisé',
      description: 'Accès personnalisé aux ressources',
    },
  },
  user: {
    invite: 'Invitation',
    title: 'Adhérents',
    menu: 'Adhérents',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nom complet',
      firstName: 'Prénom',
      lastName: 'Nom',
      status: 'Statut',
      disabled: 'Désactivée',
      phoneNumber: 'Numéro de téléphone',
      sector: 'Secteur',
      employer: 'Employeur',
      profession: 'Profession',
      address: 'Adresse',
      birthDate: 'Date de naissance',
      maritalStatus: 'État civil',
      facebookLink: 'Lien Facebook',
      sponsor: 'Parrainer',
      role: 'Rôle',
      createdAt: 'Créé le',
      updatedAt: 'Modifié le ',
      roleUser: 'Rôle / Utilisateur',
      roles: 'Rôles',
      createdAtRange: 'Créé le',
      password: 'Mot de passe',
      rememberMe: 'Rappelle-moi',
      oldPassword: 'Ancien mot de passe',
      newPassword: 'Nouveau mot de passe',
      newPasswordConfirmation:
        'Confirmation du nouveau mot de passe',
    },
    sector: {
      AGRO_ALIMENTAIRE: "Agro Alimentaire",
      ASSURANCES: "Assurance",
      AUDIOVISUEL: "Audiovisuel",
      BANCAIRE: "Bancaire",
      CHIMIE: "Chimie",
      COMPOSANTS_AUTOMOBILES: "Composants Automobiles",
      DISTRIBUTION: "Distribution",
      DISTRIBUTION_AUTOMOBILE: "Distribution Automobile",
      DIVERS: "Divers",
      FINANCIER: "Financier",
      HOLDING: "Holding",
      IMMOBILIER: "Immobilier",
      INDUSTRIEL: "Industriel",
      LEASING: "Leasing",
      LOGISTIQUE_TRANSPORT: "Logistique et Transport",
      PHARMACEUTIQUE: "Pharmaceutique",
      SANTÉ: "Santé",
      TOURSIME: "Tourisme",
      INFORMATION_TECHNOLOGY: "Technologie de l'information"
    },
    maritalStatus: {
      célébataire: 'Célibataire',
      marié: 'Marié',
    },
    enabled: 'Activée',
    disabled: 'Désactivée',
    validations: {
      // eslint-disable-next-line
      email: "L'e-mail ${valeur} n'est pas valide",
    },
    disable: 'Désactiver',
    enable: 'Activer',
    doEnableSuccess: 'Utilisateur activé avec succès',
    doDisableSuccess: 'Utilisateur désactivé avec succès',
    doDisableAllSuccess:
      'Utilisateur(s) désactivé(s) avec succès',
    doEnableAllSuccess:
      'Utilisateur(s) activé(s) avec succès',
    doAddSuccess: 'Utilisateur(s) enregistré(s) avec succès',
    doUpdateSuccess: 'Utilisateur enregistré avec succès',
    status: {
      active: 'Actif',
      invited: 'Invité',
      'empty-permissions': 'En attente de permissions',
      inactive: 'Inactive',
    },
    exporterFileName: 'Adhérents_export',
    doDestroySuccess: 'Utilisateur supprimée avec succès',
    doDestroyAllSelectedSuccess:
      'Utilisateur(s) supprimé(s) avec succès',
    edit: {
      title: 'Modifier Utilisateur',
    },
    new: {
      title: 'Inviter des Adhérents',
      titleModal: 'Nouvel utilisateur',
      emailsHint:
        "Séparez plusieurs adresses e-mail à l'aide de la virgule.",
    },
    view: {
      title: 'Voir utilisateur',
      activity: 'Activité',
    },
    importer: {
      title: 'Importer Adhérents',
      fileName: "Modèle_d'importation_d'Adhérents",
      hint:
        "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par de l'espace. Les relations doivent être les ID des enregistrements référencés séparés par un espace. Les rôles doivent être les identificateurs de rôle séparés par un espace.",
    },
    errors: {
      userAlreadyExists:
        "L'utilisateur avec cet email existe déjà",
      userNotFound: 'Utilisateur non trouvé',
      disablingHimself: 'Vous ne pouvez pas vous désactiver',
      revokingOwnPermission:
        "Vous ne pouvez pas révoquer votre propre autorisation d'administrateur",
    },
  },
  plan: {
    menu: 'Plans',
    title: 'Plans',
    free: {
      label: 'Gratuit',
      price: '$0',
    },
    growth: {
      label: 'Croissance',
      price: '$10',
    },
    enterprise: {
      label: 'Entreprise',
      price: '$50',
    },
    pricingPeriod: '/mois',
    current: 'Plan actuel',
    subscribe: "S'abonner",
    manage: "Gérer l'abonnement",
    cancelAtPeriodEnd:
      'Ce plan sera annulé à la fin de la période.',
    somethingWrong:
      "Il y a un problème avec votre abonnement. Accédez à la gestion de l'abonnement pour plus de détails.",
    notPlanUser:
      "Vous n'êtes pas l'administrateur de cet abonnement.",
    demoHintHtml:
      'Astuce : Utilisez ces <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer"> cartes de test </a> pour la démo.',
  },
  auditLog: {
    menu: "Journaux d'audit",
    title: "Journaux d'audit",
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Séparez plusieurs entités par la virgule.',
    fields: {
      id: 'Id',
      timestampRange: 'Période',
      entityName: 'Entité',
      entityNames: 'Entités',
      entityId: "ID d'entité",
      action: 'action',
      values: 'Valeurs',
      timestamp: 'Date',
      createdByEmail: "Courriel de l'utilisateur",
    },
  },
  settings: {
    title: 'Paramètres',
    menu: 'Paramètres',
    save: {
      success:
        'Configuration enregistrée avec succès. La page se rechargera dans {0} secondes pour que les modifications prennent effet.',
    },
    fields: {
      theme: 'Sujet',
      logos: 'Logo',
      backgroundImages: 'Image de fond',
    },
    colors: {
      default: 'Sombre',
      light: 'Claire',
      cyan: 'Cyan',
      'geek-blue': 'Bleu Geek',
      gold: 'Or',
      lime: 'Citron vert',
      magenta: 'Magenta',
      orange: 'Orangé',
      'polar-green': 'Vert polaire',
      purple: 'Mauve',
      red: 'Rouge',
      volcano: 'Volcan',
      yellow: 'Jaune',
    },
  },
  dashboard: {
    menu: 'Tableau de bord',
    message:
      'Cette page utilise de fausses données à des fins de démonstration uniquement. Vous pouvez le modifier sur frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Jour',
      red: 'Rouge',
      green: 'Vert',
      yellow: 'Jaune',
      grey: 'Gris',
      blue: 'Bleu',
      orange: 'Orangé',
      months: {
        '1': 'janvier',
        '2': 'Février',
        '3': 'Mars',
        '4': 'Avril',
        '5': 'Mais',
        '6': 'Juin',
        '7': 'Juillet',
        '8': 'Aoùt',
        '9': 'Septembre',
        '10': 'Octobre',
        '11': 'Novembre',
        '12': 'Décembre'
      },
      eating: 'Manger',
      drinking: 'En buvant',
      sleeping: 'Dormir',
      designing: 'Conception',
      coding: 'codage',
      cycling: 'cyclisme',
      running: 'Courrir',
      customer: 'Client',
    },
  },
  errors: {
    '403': "Désolé, vous n'avez pas accès à cette page",
    '404': "Désolé, la page que vous avez visitée n'existe pas",
    '500': 'Désolé, le serveur signale une erreur',
    '429':
      'Trop de demandes. Veuillez réessayer plus tard.',
    backToHome: 'Retourner pour commencer',
    forbidden: {
      message: 'Interdit',
    },
    validation: {
      message: "Une erreur s'est produite",
    },
    defaultErrorMessage: "Ops, une erreur s'est produite",
  },

  preview: {
    error:
      "Désolé, cette opération n'est pas autorisée en mode aperçu.",
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: "${path} n'est pas valide",
      required: "${path} c'est obligatoire",
      oneOf:
        "${path} doit être l'une des valeurs suivantes : ${values}",
      notOneOf:
        "${path} ne doit pas être l'une des valeurs suivantes : ${values}",
      notType: ({ path, type, value, originalValue }) => {
        return `${path} Doit être un ${type}`;
      },
    },
    string: {
      length:
        '${path} doit être exactement ${length} caractères',
      min:
        '${path} doit comporter au moins ${min} caractères',
      max:
        '${path} doit avoir un maximum de ${max} caractères',
      matches:
        '${path} doit correspondre à ce qui suit : "${regex}"',
      email:
        '${path} doit être une adresse e-mail valide',
      url: '${path} doit être une URL valide',
      trim: "${path} doit être une chaîne découpée",
      lowercase:
        '${path} doit être une chaîne en minuscule',
      uppercase: '${path} doit être une chaîne en majuscule',
      selected: '${path} doit être sélectionné',
    },
    number: {
      min: '${path} doit être supérieur ou égal à ${min}',
      max: '${path} doit être inférieur ou égal à ${max}',
      lessThan: '${path} doit être inférieur à ${less}',
      moreThan: '${path} doit être supérieur à ${more}',
      notEqual: '${path} ne doit pas être égal à ${notEqual}',
      positive: '${path} doit être un nombre positif',
      negative: '${path} doit être un nombre négatif',
      integer: '${path} doit être un nombre entier',
    },
    date: {
      min: 'Le champ ${path} doit être supérieur à ${min}',
      max: 'Le champ ${path} doit être inférieur à ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        "Le champ ${path} ne peut pas avoir de clés non spécifiées dans la forme de l'objet",
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} c'est obligatoire`
          : `'Le champ ${path} doit avoir au moins ${min} éléments`,
      max:
        'Le champ ${path} doit avoir des éléments inférieurs ou égaux à ${max}',
    },
  },
  fileUploader: {
    upload: 'télécharger',
    image: 'Vous devez télécharger une image',
    size:
      'Le fichier est très volumineux. La taille maximale autorisée est {0}',
    formats: "Format invalide. Il doit s'agir de : {0}.",
  },
  importer: {
    line: 'Ligne',
    status: 'Status',
    pending: 'En attente',
    imported: 'Importé',
    error: 'Erreur',
    total: '{0} importé, {1} en attente et {2} par erreur',
    importedMessage: '{0} traité sur {1}.',
    noNavigateAwayMessage:
      "Ne quittez pas cette page ou l'importation s'arrêtera.",
    completed: {
      success:
        'Importation terminée. Toutes les lignes ont été importées avec succès.',
      someErrors:
        "Traitement terminé, mais certaines lignes n'ont pas pu être importées.",
      allErrors:
        "L'importation a échoué. Il n'y a pas de lignes valides.",
    },
    form: {
      downloadTemplate: 'Télécharger le modèle',
      hint:
        'Cliquez ou faites glisser le fichier dans cette zone pour continuer.',
    },
    list: {
      discardConfirm:
        'Vous êtes sûr? Les données non importées seront perdues.',
    },
    errors: {
      invalidFileEmpty: 'Le fichier est vide',
      invalidFileExcel:
        'Seuls les fichiers Excel (.xlsx) sont autorisés',
      invalidFileUpload:
        'Fichier non valide. Assurez-vous que vous utilisez la dernière version du modèle.',
      importHashRequired: 'Importer le hachage requis',
      importHashExistent:
        'Les données ont déjà été importées',
    },
  },

  autocomplete: {
    loading: 'Chargement...',
    noOptions: 'Données non trouvées',
  },
  imagesViewer: {
    noImage: 'Sans image',
  },
  table: {
    noData: 'Aucun enregistrement trouvé',
    loading: 'Chargement...',
  },
  pagination: {
    items_per_page: '/ page',
    jump_to: 'Aller',
    jump_to_confirm: 'confirmer',
    page: '',

    prev_page: 'Page précédente',
    next_page: 'Page suivante',
    prev_5: '5 pages précédentes',
    next_5: '5 pages suivantes',
    prev_3: '3 pages précédentes',
    next_3: '3 pages suivantes',
  },
};

export default es;
