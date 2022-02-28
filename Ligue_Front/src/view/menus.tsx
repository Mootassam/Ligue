import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';
import { Dropdown } from 'react-bootstrap';
//import { Menu } from 'antd';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: 'fas fa-th-large',
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: 'fas fa-credit-card',
    label: i18n('plan.menu'),
  },
  {
    path: '#',
    permissionRequired: permissions.associationRead,
    icon: 'fas fa-tasks',
    label: i18n('common.administration'),
    haveSubMenu: true,
    subPaths: [
      '/association',
      '/mandat',
      '/categorie-mouv',
      '/mouvements',
    ],
    subMenu: [
      {
        path: '/association',
        permissionRequired: permissions.associationRead,
        icon: 'fa fa-genderless',
        label: i18n('entities.association.menu'),
        haveSubMenu: true,
      },

      {
        path: '/mandat',
        permissionRequired: permissions.mandatRead,
        icon: 'fa fa-circle-o',
        label: i18n('entities.mandat.menu'),
      },
    ],
  },

  // {
  //   path: '#',
  //   permissionRequired: permissions.associationRead,
  //   icon: 'fas fa-chevron-right',
  //   label: i18n('common.accounting'),
  //   haveSubMenu: true,
  //   subPaths: [
  //     '/association',
  //     '/mandat',
  //     '/categorie-mouv',
  //     '/mouvements',
  //   ],
  //   subMenu: [
  //     {
  //       path: '/categorie-mouv',
  //       permissionRequired: permissions.categorieMouvRead,
  //       icon: 'fa fa-circle-o',
  //       label: i18n('entities.categorieMouv.menu'),
  //     },

  //     {
  //       path: '/mouvements',
  //       permissionRequired: permissions.mouvementsRead,
  //       icon: 'fa fa-circle-o',
  //       label: i18n('entities.mouvements.menu'),
  //     },
  //   ],
  // },

  {
    path: '#',
    permissionRequired: permissions.associationRead,
    icon: 'fas fa-users',
    label: i18n('user.menu'),
    haveSubMenu: true,
    subPaths: ['/user', '/historique-points'],
    subMenu: [
      {
        path: '/user',
        label: i18n('user.menu'),
        permissionRequired: permissions.userRead,
        icon: 'fa fa-circle-o',
      },
      {
        path: '/historique-points',
        permissionRequired:
          permissions.historiquePointsRead,
        icon: 'fa fa-circle-o',
        label: i18n('entities.historiquePoints.menu'),
      },
    ],
  },
  {
    path: '#',
    permissionRequired: permissions.associationRead,
    icon: 'far fa-user',
    label: i18n('common.membership'),
    haveSubMenu: true,
    subPaths: ['/campagne', '/palier'],
    subMenu: [
      {
        path: '/palier',
        permissionRequired: permissions.palierRead,
        icon: 'fa fa-circle-o',
        label: i18n('entities.palier.menu'),
      },
      {
        path: '/campagne',
        permissionRequired: permissions.campagneRead,
        icon: 'fa fa-circle-o',
        label: i18n('entities.campagne.menu'),
      },
    ],
  },
  // {
  //   path: '#',
  //   permissionRequired: permissions.associationRead,
  //   icon: 'fas fa-chevron-right',
  //   label: i18n('common.shop'),
  //   haveSubMenu: true,
  //   subPaths: ['/produit-categorie', '/produit', '/produit-commande'],
  //   subMenu: [
  //     {
  //       path: '/produit-categorie',
  //       permissionRequired: permissions.produitCategorieRead,
  //       icon: 'fa fa-circle-o',
  //       label: i18n('entities.produitCategorie.menu'),
  //     },
  //     {
  //       path: '/produit',
  //       permissionRequired: permissions.produitRead,
  //       icon: 'fa fa-circle-o',
  //       label: i18n('entities.produit.menu'),
  //     },
  //     {
  //       path: '/produit-commande',
  //       permissionRequired: permissions.produitCommandeRead,
  //       icon: 'fa fa-circle-o',
  //       label: i18n('entities.produitCommande.menu'),
  //     },
  //   ]
  // },
  {
    path: '/projet',
    permissionRequired: permissions.projetRead,
    icon: 'fab fa-product-hunt',
    label: i18n('entities.projet.menu'),
  },
].filter(Boolean);
