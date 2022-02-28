import authAxios from '../shared/axios/authAxios';
import axios from 'axios';
import AuthCurrentTenant from '../auth/authCurrentTenant';

export default class DonsService {
  static async listDons() {
    const tenantId = await AuthCurrentTenant.get();

    const response = await authAxios.get(`/tenant/${tenantId}/donsCurrentUSer`);
    return response.data;
  }
  static async create(data) {
    const body = {
      data,
    };
    const tenantId = await AuthCurrentTenant.get();

    const response = await authAxios.post(`/tenant/${tenantId}/dons`, body);
    return response.data;
  }

  static async paymee_step1(montant) {
    const values = {
      vendor: 1479,
      amount: montant,
      note: 'Order #1000132',
    };
    const response = await axios.post(
      'https://sandbox.paymee.tn/api/v1/payments/create',
      values,
      {
        headers: {
          Authorization: 'Token 7ef253c96356c91f02552f934232ade8a3ccdbd2',
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  }

  static async paymee_step3() {
    let token = '7ef253c96356c91f02552f934232ade8a3ccdbd2';
    const response = await axios.get(
      `https://sandbox.paymee.tn/api/v1/payments/${token}/check`,
      {
        headers: {
          Authorization: 'Token 7ef253c96356c91f02552f934232ade8a3ccdbd2',
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  }
}
