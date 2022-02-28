import authAxios from '../shared/axios/authAxios';
import AuthCurrentTenant from '../auth/authCurrentTenant';

export default class ProduitCommandeService {
  static async listAchat() {
    const tenantId = await AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/achatsCurrentUser`,
    );
    return response.data;
  }
}
