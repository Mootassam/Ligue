import authAxios from '../shared/axios/authAxios';
import AuthCurrentTenant from '../auth/authCurrentTenant';

export default class VotesService {
  static async listVotes() {
    const tenantId = await AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/votesCurrentUser`,
    );
    return response.data;
  }

  static async update(id, data) {
    const body = {
      id,
      data,
    };
    const tenantId = await AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant${tenantId}/votes/${id}`,
      body,
    );

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };
    const tenantId = await AuthCurrentTenant.get();

    const response = await authAxios.post(`/tenant/${tenantId}/votes`, body);

    return response.data;
  }
}
