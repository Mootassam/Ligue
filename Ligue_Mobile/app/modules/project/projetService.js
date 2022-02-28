import authAxios from '../shared/axios/authAxios';
import AuthCurrentTenant from '../auth/authCurrentTenant';

export default class ProjetService {
  static async find(id) {
    const tenantId = await AuthCurrentTenant.get();
    const response = await authAxios.get(`/tenant/${tenantId}/projet/${id}`);
    return response.data;
  }
  static async list(filter, orderBy, offset) {
    const params = {
      filter,
      orderBy,
      offset,
    };
    const tenantId = await AuthCurrentTenant.get();
    const response = await authAxios.get(`/tenant/${tenantId}/projet`, {
      params,
    });
    return response.data;
  }
}
