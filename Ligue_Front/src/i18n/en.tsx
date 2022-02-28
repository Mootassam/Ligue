const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    addVote: 'New Vote',
    addFund: 'New Fund',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
    quantityError: 'Quantity has to be inferior to Stock',
    administration: 'Administration',
    membership: 'Membership',
    shop: 'Shop'
  },

  app: {
    title: 'Digital Ligue',
  },

  api: {
    menu: 'API',
  },

  entities: {
    association: {
      name: 'association',
      label: 'Associations',
      menu: 'Associations',
      exporterFileName: 'association_export',
      list: {
        menu: 'Associations',
        title: 'Associations',
      },
      create: {
        success: 'Association successfully saved',
      },
      update: {
        success: 'Association successfully saved',
      },
      destroy: {
        success: 'Association successfully deleted',
      },
      destroyAll: {
        success: 'Association(s) successfully deleted',
      },
      edit: {
        title: 'Edit Association',
      },
      fields: {
        id: 'Id',
        'nom': 'Name',
        'description': 'Description',
        'adresse': 'Adress',
        'phone': 'Phone',
        'email': 'Mail',
        'tva': 'Tax identification number',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Association',
      },
      view: {
        title: 'View Association',
      },
      importer: {
        title: 'Import Associations',
        fileName: 'association_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    mandat: {
      name: 'Mandate',
      label: 'Mandates',
      menu: 'Mandates',
      exporterFileName: 'Mandate_export',
      list: {
        menu: 'Mandates',
        title: 'Mandates',
      },
      create: {
        success: 'Mandate successfully saved',
      },
      update: {
        success: 'Mandate successfully saved',
      },
      destroy: {
        success: 'Mandate successfully deleted',
      },
      destroyAll: {
        success: 'Mandate(s) successfully deleted',
      },
      edit: {
        title: 'Edit Mandate',
      },
      fields: {
        id: 'Id',
        'titre': 'Title',
        'startdateRange': 'Start date',
        'startdate': 'Start date',
        'enddateRange': 'End date',
        'enddate': 'End date',
        'pv': 'Pv',
        'members': 'Elected members',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
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
        title: 'New Mandate',
      },
      view: {
        title: 'View Mandate',
      },
      importer: {
        title: 'Import Mandates',
        fileName: 'Mandate_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    categorieMouv: {
      name: 'Movement category',
      label: 'Movement categories',
      menu: 'Movement categories',
      exporterFileName: 'Movement_category_export',
      list: {
        menu: 'Movement categories',
        title: 'Movement categories',
      },
      create: {
        success: 'Movement category successfully saved',
      },
      update: {
        success: 'Movement category successfully saved',
      },
      destroy: {
        success: 'Movement category successfully deleted',
      },
      destroyAll: {
        success: 'Movement category(s) successfully deleted',
      },
      edit: {
        title: 'Edit Movement category',
      },
      fields: {
        id: 'Id',
        'title': 'Title',
        'description': 'Description',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Movement category',
      },
      view: {
        title: 'View Movement category',
      },
      importer: {
        title: 'Import Movement categories',
        fileName: 'Movement_category_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    mouvements: {
      name: 'Mouvements',
      label: 'Mouvements',
      menu: 'Mouvements',
      exporterFileName: 'mouvements_export',
      list: {
        menu: 'Mouvements',
        title: 'Mouvements',
      },
      create: {
        success: 'Mouvements successfully saved',
      },
      update: {
        success: 'Mouvements successfully saved',
      },
      destroy: {
        success: 'Mouvements successfully deleted',
      },
      destroyAll: {
        success: 'Mouvements(s) successfully deleted',
      },
      edit: {
        title: 'Edit Mouvements',
      },
      fields: {
        id: 'Id',
        'typeMouv': 'Mouvement Type',
        'categorie': 'Category',
        'titre': 'Title',
        'montantRange': 'Amount',
        'montant': 'Amount',
        'attachements': 'Attachments',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'typeMouv': {
          'entree': 'Entrance',
          'sortie': 'Output',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Mouvements',
      },
      view: {
        title: 'View Mouvements',
      },
      importer: {
        title: 'Import Mouvements',
        fileName: 'mouvements_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    campagne: {
      name: 'Campaign',
      label: 'Campaigns',
      menu: 'Campaigns',
      exporterFileName: 'Campaign_export',
      list: {
        menu: 'Campaigns',
        title: 'Campaigns',
      },
      create: {
        success: 'Campaign successfully saved',
      },
      update: {
        success: 'Campaign successfully saved',
      },
      destroy: {
        success: 'Campaign successfully deleted',
      },
      destroyAll: {
        success: 'Campaign(s) successfully deleted',
      },
      edit: {
        title: 'Edit Campaign',
      },
      fields: {
        id: 'Id',
        'titre': 'Title',
        'anneeRange': 'Year',
        'annee': 'Year',
        'datedebutRange': 'Start date',
        'datedebut': 'Start date',
        'datefinRange': 'End date',
        'datefin': 'End date',
        'statut': 'Status',
        'details': 'Details',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'statut': {
          'en_cours': 'In progress',
          'termine': 'Ended',
          'annule': 'Canceled',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Campaign',
      },
      view: {
        title: 'View Campaign',
      },
      importer: {
        title: 'Import Campaigns',
        fileName: 'Campaign_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    detailsCampagne: {
      name: 'Campaign membership',
      label: 'Campaign membership',
      menu: 'Campaign membership',
      exporterFileName: 'Campaign_membership_export',
      list: {
        menu: 'Campaign membership',
        title: 'Campaign membership',
      },
      create: {
        success: 'Campaign membership successfully saved',
      },
      update: {
        success: 'Campaign membership successfully saved',
      },
      destroy: {
        success: 'Campaign membership successfully deleted',
      },
      destroyAll: {
        success: 'Campaign membership(s) successfully deleted',
      },
      edit: {
        title: 'Edit Campaign membership',
      },
      fields: {
        id: 'Id',
        'adherent': 'Member',
        'palier': 'Level',
        'statutPay': 'Payment status',
        'montantRange': 'Amount',
        'montant': 'Amount',
        'facture': 'Invoice',
        'typePay': 'Payment method',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'statutPay': {
          'paye': 'Paid',
          'non_paye': 'Unpaid',
        },
        'typePay': {
          'paymee': 'Paymee',
          'cb': 'Bank card',
          'virement': 'Bank Transfer',
          'especes': 'Cash',
        },
      },
      placeholders: {
        'adherent': 'Member',
      },
      hints: {
        'adherent': 'Member',
      },
      new: {
        title: 'New Membership',
      },
      view: {
        title: 'View Membership',
      },
      importer: {
        title: 'Import Campaign membership',
        fileName: 'Campaign_membership_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    palier: {
      name: 'Level',
      label: 'Levels',
      menu: 'Levels',
      exporterFileName: 'Level_export',
      list: {
        menu: 'Levels',
        title: 'Levels',
      },
      create: {
        success: 'Level successfully saved',
      },
      update: {
        success: 'Level successfully saved',
      },
      destroy: {
        success: 'Level successfully deleted',
      },
      destroyAll: {
        success: 'Level(s) successfully deleted',
      },
      edit: {
        title: 'Edit Level',
      },
      fields: {
        id: 'Id',
        'title': 'Title',
        'montantRange': 'Amount',
        'montant': 'Amount',
        'details': 'Details',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Level',
      },
      view: {
        title: 'View Level',
      },
      importer: {
        title: 'Import Levels',
        fileName: 'Level_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    historiquePoints: {
      name: 'Points history',
      label: 'Points history',
      menu: 'Points history',
      exporterFileName: 'Points_history_export',
      list: {
        menu: 'Points history',
        title: 'Points history',
      },
      create: {
        success: 'Points history successfully saved',
      },
      update: {
        success: 'Points history successfully saved',
      },
      destroy: {
        success: 'Points history successfully deleted',
      },
      destroyAll: {
        success: 'Points history(s) successfully deleted',
      },
      edit: {
        title: 'Edit Points history',
      },
      fields: {
        id: 'Id',
        'adherent': 'Member',
        'pointsRange': 'Points',
        'points': 'Points',
        'commentaire': 'Comment',
        'attachements': 'Attachments',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Points history',
      },
      view: {
        title: 'View Points history',
      },
      importer: {
        title: 'Import Points history',
        fileName: 'Points_history_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    projet: {
      name: 'Project',
      label: 'Projects',
      menu: 'Projects',
      exporterFileName: 'project_export',
      list: {
        menu: 'Projects',
        title: 'Projects',
      },
      create: {
        success: 'Project successfully saved',
      },
      update: {
        success: 'Project successfully saved',
      },
      destroy: {
        success: 'Project successfully deleted',
      },
      destroyAll: {
        success: 'Project(s) successfully deleted',
      },
      edit: {
        title: 'Edit Project',
      },
      fields: {
        id: 'Id',
        'titre': 'Title',
        'description': 'Description',
        'details': 'Details',
        'typeProjet': 'Type',
        'statutProjet': 'Status',
        'photoPrincipal': 'Main Photo',
        'budgetRange': 'Budget',
        'budget': 'Budget',
        'lieu': 'Place',
        'dateDebutProjetRange': 'Project Start Date',
        'dateDebutProjet': 'Project Start Date',
        'dateFinProjetRange': 'Project End Date',
        'dateFinProjet': 'Project End Date',
        'dateDebutDonRange': 'Donation Start Date',
        'dateDebutDon': 'Donation Start Date',
        'dateFinDonRange': 'Donation End Date',
        'dateFinDon': 'Donation End Date',
        'photos': 'Pictures',
        'attachements': 'Attachments',
        'votes': 'Votes',
        'dons': 'Donation',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'typeProjet': {
          'idee': 'Idea',
          'projet_ligue': 'League Project',
          'projet_ca': 'CA Project',
        },
        'statutProjet': {
          'draft': 'Draft',
          'actif': 'Active',
          'canceled': 'Canceled',
          'closed': 'Closed',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Project',
      },
      view: {
        title: 'View Project',
      },
      importer: {
        title: 'Import Projects',
        fileName: 'project_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    votes: {
      name: 'Votes',
      label: 'Votes',
      menu: 'Votes',
      exporterFileName: 'votes_export',
      list: {
        menu: 'Votes',
        title: 'Votes',
      },
      create: {
        success: 'Votes successfully saved',
      },
      update: {
        success: 'Votes successfully saved',
      },
      destroy: {
        success: 'Votes successfully deleted',
      },
      destroyAll: {
        success: 'Votes(s) successfully deleted',
      },
      edit: {
        title: 'Edit Votes',
      },
      fields: {
        id: 'Id',
        'adherent': 'Member',
        'votesRange': 'Votes',
        'votes': 'Votes',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Votes',
      },
      view: {
        title: 'View Votes',
      },
      importer: {
        title: 'Import Votes',
        fileName: 'votes_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    dons: {
      name: 'Donations',
      label: 'Donations',
      menu: 'Donations',
      exporterFileName: 'Donations_export',
      list: {
        menu: 'Donations',
        title: 'Donations',
      },
      create: {
        success: 'Donations successfully saved',
      },
      update: {
        success: 'Donations successfully saved',
      },
      destroy: {
        success: 'Donations successfully deleted',
      },
      destroyAll: {
        success: 'Donations(s) successfully deleted',
      },
      edit: {
        title: 'Edit Donations',
      },
      fields: {
        id: 'Id',
        'adherent': 'Member',
        'montantRange': 'Amount',
        'montant': 'Amount',
        'typePaiement': 'Payment type',
        'attachements': 'Attachments',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'typePaiement': {
          'paymee': 'Paymee',
          'cb': 'Bank card',
          'virement': 'Transfer',
          'especes': 'Cash',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Donations',
      },
      view: {
        title: 'View Donations',
      },
      importer: {
        title: 'Import Donations',
        fileName: 'Donations_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    produitCategorie: {
      name: 'Product Category',
      label: 'Product Categories',
      menu: 'Product Categories',
      exporterFileName: 'Product_Category_export',
      list: {
        menu: 'Product Categories',
        title: 'Product Categories',
      },
      create: {
        success: 'Product Category successfully saved',
      },
      update: {
        success: 'Product Category successfully saved',
      },
      destroy: {
        success: 'Product Category successfully deleted',
      },
      destroyAll: {
        success: 'Product Category(s) successfully deleted',
      },
      edit: {
        title: 'Edit Product Category',
      },
      fields: {
        id: 'Id',
        'titre': 'Title',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Product Category',
      },
      view: {
        title: 'View Product Category',
      },
      importer: {
        title: 'Import Product Categories',
        fileName: 'Product_Category_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    produit: {
      name: 'Product',
      label: 'Products',
      menu: 'Products',
      exporterFileName: 'Product_export',
      list: {
        menu: 'Products',
        title: 'Products',
      },
      create: {
        success: 'Product successfully saved',
      },
      update: {
        success: 'Product successfully saved',
      },
      destroy: {
        success: 'Product successfully deleted',
      },
      destroyAll: {
        success: 'Product(s) successfully deleted',
      },
      edit: {
        title: 'Edit Product',
      },
      fields: {
        id: 'Id',
        'titre': 'Title',
        'description': 'Description',
        'publish': 'Published',
        'stockable': 'Storable',
        'prixRange': 'Price Range',
        'prix': 'Price',
        'photos': 'Pictures',
        'stockRange': 'Stock',
        'stock': 'Stock',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        categorie: 'Category',
        quantity: 'Quantity',
        subTotal: 'Sub Total (DT)',
        total: 'Total (DT)'
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Product',
      },
      view: {
        title: 'View Product',
      },
      importer: {
        title: 'Import Products',
        fileName: 'Product_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    produitCommande: {
      name: 'Product Order',
      label: 'Product Orders',
      menu: 'Product Orders',
      exporterFileName: 'Product Order_export',
      list: {
        menu: 'Product Orders',
        title: 'Product Orders',
      },
      create: {
        success: 'Product Order successfully saved',
      },
      update: {
        success: 'Product Order successfully saved',
      },
      destroy: {
        success: 'Product Order successfully deleted',
      },
      destroyAll: {
        success: 'Product Order(s) successfully deleted',
      },
      edit: {
        title: 'Edit Product Order',
      },
      fields: {
        id: 'Id',
        'adherent': 'Member',
        'produits': 'Products',
        'quantiteRange': 'Quantity',
        'quantite': 'Quantity',
        'attachements': 'Attachments',
        'delivered': 'Delivered',
        'commandLine': 'Command Line',
        total: 'Total (DT)',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Product Order',
      },
      view: {
        title: 'View Product Order',
      },
      importer: {
        title: 'Import Product Orders',
        fileName: 'Product_Order_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    commandLine: {
      name: 'Command Line',
      label: 'Command Lines',
      menu: 'Command Lines',
      exporterFileName: 'CommandLine_export',
      list: {
        menu: 'Command Lines',
        title: 'Command Lines',
      },
      create: {
        success: 'Command Line successfully saved',
      },
      update: {
        success: 'Command Line successfully saved',
      },
      destroy: {
        success: 'Command Line successfully deleted',
      },
      destroyAll: {
        success: 'Command Line(s) successfully deleted',
      },
      edit: {
        title: 'Edit Command Line',
      },
      fields: {
        id: 'Id',
        'product': 'Product',
        'quantityRange': 'Quantity',
        'quantity': 'Quantity',
        'subTotalRange': 'SubTotal (DT)',
        'commandLine': 'Command Line',
        'subTotal': 'SubTotal (DT)',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Command Line',
      },
      view: {
        title: 'View Command Line',
      },
      importer: {
        title: 'Import Command Lines',
        fileName: 'commandLine_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    inactive: {
      message:
        "Your account is deactivated, please contact the administration.",
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    membre: {
      label: 'Member',
      description: 'Full access to all resources',
    },
    adhérent: {
      label: 'Adherent',
      description: 'Full access to all resources',
    },
    sponsor: {
      label: 'Sponsor',
      description: 'Full access to all resources',
    },
    partenaire: {
      label: 'Partner',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      sector: 'Sector',
      employer: 'Employer',
      profession: 'Profession',
      address: 'Address',
      birthDate: 'Birth Date',
      maritalStatus: 'Marital Status',
      facebookLink: 'Facebook Link',
      sponsor: 'Sponsor',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    sector: {
      AGRO_ALIMENTAIRE: "Food industry",
      ASSURANCES: "Assurance",
      AUDIOVISUEL: "Audio-visual",
      BANCAIRE: "Banking",
      CHIMIE: "Chemistry",
      COMPOSANTS_AUTOMOBILES: "Automotive components",
      DISTRIBUTION: "Distribution",
      DISTRIBUTION_AUTOMOBILE: "Automotive Distribution",
      DIVERS: "Various",
      FINANCIER: "Financial",
      HOLDING: "Holding",
      IMMOBILIER: "Real estate",
      INDUSTRIEL: "Industrial",
      LEASING: "Leasing",
      LOGISTIQUE_TRANSPORT: "Logistics and transport",
      PHARMACEUTIQUE: "Pharmaceutical",
      SANTÉ: "Health",
      TOURSIME: "Tourism",
      INFORMATION_TECHNOLOGY: "Information Technology"
    },
    maritalStatus: {
      célébataire: 'Single',
      marié: 'Married',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
      inactive: 'Inactive',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
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

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Dark',
      light: 'Light',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',

    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },
};

export default en;
