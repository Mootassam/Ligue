import authAxios from '../shared/axios/authAxios';
import AuthCurrentTenant from '../auth/authCurrentTenant';

export default class HistoriquePointsService {
  static async listGamifications() {
    const tenantId = await AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/histroiqueCurrentUSer`,
    );
    return response.data;
  }

  static async create(values) {
    const tenantId = await AuthCurrentTenant.get();
    const data = {
      points: values.montant,
      adherent: values.adherent,
      commentaire: 'Projet',
    };
    const body = {
      data,
    };

    const response = await authAxios.post(
      `/tenant/${tenantId}/historique-points`,
      body,
    );

    return response.data;
  }
}
