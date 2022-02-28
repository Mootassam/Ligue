import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';

let inMemoryToken = null;
export default class AuthToken {
  static get() {
    return inMemoryToken || AsyncStorage.getItem('jwt') || null;
  }

  static set(token, rememberMe) {
    if (rememberMe) {
      AsyncStorage.setItem('jwt', token || '');
    } else {
      inMemoryToken = token;
      AsyncStorage.setItem('jwt', '');
    }
  }

  static async store(email, password) {
    await Keychain.setGenericPassword(email, password, {
      accessControl: 'BiometryCurrentSetOrDevicePasscode',
      accessible: 'WhenPasscodeSetThisDeviceOnly',
      authenticationType: 'DevicePasscodeOrBiometrics',
    });
  }

  static async reset() {
    await Keychain.resetGenericPassword();
  }
}
