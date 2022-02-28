export default class PermissionChecker {
  currentTenant;
  currentUser;

  constructor(currentTenant, currentUser) {
    this.currentTenant = currentTenant;
    this.currentUser = currentUser;
  }

  get currentUserRolesIds() {
    if (!this.currentUser || !this.currentUser.tenants) {
      return [];
    }

    const tenant = this.currentUser.tenants
      .filter(tenantUser => tenantUser.status === 'active')
      .find(tenantUser => tenantUser.tenant.id === this.currentTenant.id);

    if (!tenant) {
      return [];
    }

    return tenant.roles;
  }

  get isEmptyTenant() {
    if (!this.isAuthenticated) {
      return true;
    }

    if (!this.currentUser.tenants) {
      return true;
    }

    return !this.currentUser.tenants.some(tenant => tenant.status === 'active');
  }

  get isEmptyPermissions() {
    if (!this.isAuthenticated) {
      return true;
    }

    if (!this.currentUser.tenants) {
      return true;
    }

    const tenant = this.currentUser.tenants.find(
      tenant => tenant.status === 'active',
    );

    if (!tenant) {
      return true;
    }

    return !tenant.roles || !tenant.roles.length;
  }

  get isAuthenticated() {
    return Boolean(this.currentUser) && Boolean(this.currentUser.id);
  }
}
