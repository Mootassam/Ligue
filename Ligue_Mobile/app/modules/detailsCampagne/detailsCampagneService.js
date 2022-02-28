import authAxios from '../../modules/shared/axios/authAxios';
import AuthCurrentTenant from '../auth/authCurrentTenant';

export default class DetailsCampagneService {
  static async listAdhesionss() {
    const tenantId = await AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/adhesionsCurrentUser`,
    );
    return response.data;
  }
}
