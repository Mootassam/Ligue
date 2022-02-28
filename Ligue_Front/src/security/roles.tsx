import { i18n } from 'src/i18n';

class Roles {
  static get values() {
    return {
      admin: 'admin',
      membre: 'membre',
      adhérent: 'adhérent',
      sponsor:'sponsor',
      partenaire:'partenaire',

    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`${roleId}`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }
}

export default Roles;
