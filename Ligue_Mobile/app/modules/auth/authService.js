import {authAxios, AuthToken} from '@modules';

export default class authService {
  static async registerWithEmailAndPassword(
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  ) {
    const response = await authAxios.post('/auth/sign-up', {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });
    return response.data;
  }
  static async signinWithEmailAndPassword(email, password) {
    const response = await authAxios.post('/auth/sign-in', {
      email,
      password,
    });
    return response.data;
  }

  static async fetchMe() {
    const response = await authAxios.get('/auth/me');
    return response.data;
  }

  static async signout() {
    // AuthToken.reset();
    AuthToken.set(null, true);
  }

  static async updateProfile(data) {
    const body = {
      data,
    };

    const response = await authAxios.put('/auth/profile', body);

    return response.data;
  }

  static async changePassword(oldPassword, newPassword) {
    const body = {
      oldPassword,
      newPassword,
    };
    const response = await authAxios.put('/auth/change-password', body);
    return response.data;
  }

  static async passwordReset(token, password) {
    const response = await authAxios.put('/auth/password-reset', {
      token,
      password,
      // tenantId: tenantSubdomain.isSubdomain
      //   ? AuthCurrentTenant.get()
      //   : undefined,
    });

    return response.data;
  }
}
