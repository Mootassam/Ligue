import service from './authService';
import {AuthToken} from '@modules';
import Errors from '../shared/error/error';
import {Message} from '@shared';
import * as Keychain from 'react-native-keychain';

const prefix = 'AUTH';

const authActions = {
  ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,

  AUTH_INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  AUTH_INIT_ERROR: `${prefix}_INIT_ERROR`,

  AUTH_START: `${prefix}_START`,
  AUTH_SUCCESS: `${prefix}_SUCCESS`,
  AUTH_ERROR: `${prefix}_ERROR`,

  AUTH_FINGER_START: `${prefix}_FINGER_START`,
  AUTH_FINGER_SUCCESS: `${prefix}_FINGER_SUCCESS`,
  AUTH_FINGER_ERROR: `${prefix}_FINGER_ERROR`,

  UPDATE_PROFILE_START: `${prefix}_UPDATE_PROFILE_START`,
  UPDATE_PROFILE_SUCCESS: `${prefix}_UPDATE_PROFILE_SUCCESS`,
  UPDATE_PROFILE_ERROR: `${prefix}_UPDATE_PROFILE_ERROR`,

  CURRENT_USER_REFRESH_START: `${prefix}_CURRENT_USER_REFRESH_START`,
  CURRENT_USER_REFRESH_SUCCESS: `${prefix}_CURRENT_USER_REFRESH_SUCCESS`,
  CURRENT_USER_REFRESH_ERROR: `${prefix}_CURRENT_USER_REFRESH_ERROR`,

  PASSWORD_CHANGE_START: `${prefix}_PASSWORD_CHANGE_START`,
  PASSWORD_CHANGE_SUCCESS: `${prefix}_PASSWORD_CHANGE_SUCCESS`,
  PASSWORD_CHANGE_ERROR: `${prefix}_PASSWORD_CHANGE_ERROR`,

  doClearErrorMessage() {
    return {
      type: authActions.ERROR_MESSAGE_CLEARED,
    };
  },

  doRegisterEmailAndPassword: (
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  ) => async dispatch => {
    try {
      dispatch({type: authActions.AUTH_START});

      const token = await service.registerWithEmailAndPassword(
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      );

      AuthToken.set(token, true);

      const currentUser = await service.fetchMe();

      dispatch({
        type: authActions.AUTH_SUCCESS,
        payload: {
          currentUser,
        },
      });
    } catch (error) {
      await service.signout();

      if (Errors.errorCode(error) !== 400) {
        Errors.handle(error);
      }

      dispatch({
        type: authActions.AUTH_ERROR,
        payload: Errors.selectMessage(error),
      });
    }
  },

  doSigninWithEmailAndPassword: (
    email,
    password,
    rememberMe,
  ) => async dispatch => {
    try {
      dispatch({type: authActions.AUTH_START});
      let currentUser = null;
      const token = await service.signinWithEmailAndPassword(email, password);
      AuthToken.store(email, password);
      AuthToken.set(token, rememberMe);
      currentUser = await service.fetchMe();
      dispatch({
        type: authActions.AUTH_SUCCESS,
        payload: {
          currentUser,
        },
      });
    } catch (error) {
      await service.signout();
      if (Errors.errorCode(error) !== 400) {
        Errors.handle(error);
      }
      dispatch({
        type: authActions.AUTH_ERROR,
        payload: Errors.selectMessage(error),
      });
      Message.error(Errors.selectMessage(error));
    }
  },

  doSigninWihFingerPrint: () => async dispatch => {
    try {
      dispatch({type: authActions.AUTH_FINGER_START});
      const BiometryTypes = {
        TouchID: 'TouchedID',
        FaceID: 'FaceID',
        Fingerprint: 'Fingerprint',
      };
      await Keychain.getSupportedBiometryType().then(async biometryType => {
        if (biometryType === BiometryTypes.Fingerprint) {
          const options = {
            authenticationPrompt: {
              title: 'Authentication ',
              cancel: 'Annuler',
            },
            accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_AN,
          };
          const credentials = await Keychain.getGenericPassword(options);
          if (credentials) {
            await dispatch(
              authActions.doSigninWithEmailAndPassword(
                credentials.username,
                credentials.password,
                true,
              ),
            );
            dispatch({
              type: authActions.AUTH_FINGER_SUCCESS,
            });
          } else {
            Message.error(
              'Please Login With your email and Passowrd and then try again.',
            );
          }
        } else {
          Message.error(
            'Vous devez Ajouter votre empreinte dans votre parameteres de verrouillage de votre smartphone',
          );
        }
      });
    } catch (error) {
      dispatch({
        type: authActions.AUTH_FINGER_ERROR,
      });
    }
  },

  doSignout: () => async dispatch => {
    try {
      dispatch({type: authActions.AUTH_START});
      await service.signout();

      dispatch({
        type: authActions.AUTH_SUCCESS,
        payload: {
          currentUser: null,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: authActions.AUTH_ERROR,
      });
    }
  },

  doInit: () => async dispatch => {
    try {
      const token = AuthToken.get();
      let currentUser = null;

      if (token !== null) {
        currentUser = await service.fetchMe();
      }
      dispatch({
        type: authActions.AUTH_INIT_SUCCESS,
        payload: {
          currentUser,
        },
      });
    } catch (error) {
      service.signout();
      Errors.handle(error);

      dispatch({
        type: authActions.AUTH_INIT_ERROR,
        payload: error,
      });
    }
  },
  doRefreshCurrentUser: () => async dispatch => {
    try {
      dispatch({
        type: authActions.CURRENT_USER_REFRESH_START,
      });

      let currentUser = null;
      const token = AuthToken.get();
      if (token) {
        currentUser = await service.fetchMe();
      }

      dispatch({
        type: authActions.CURRENT_USER_REFRESH_SUCCESS,
        payload: {
          currentUser,
        },
      });
    } catch (error) {
      service.signout();
      Errors.handle(error);

      dispatch({
        type: authActions.CURRENT_USER_REFRESH_ERROR,
        payload: error,
      });
    }
  },

  doUpdateProfile: data => async dispatch => {
    try {
      dispatch({
        type: authActions.UPDATE_PROFILE_START,
      });

      await service.updateProfile(data);

      dispatch({
        type: authActions.UPDATE_PROFILE_SUCCESS,
      });
      await dispatch(authActions.doRefreshCurrentUser());
      Message.success('Mise à jour du profil réussie');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: authActions.UPDATE_PROFILE_ERROR,
      });
      Message.error(Errors.selectMessage(error));
    }
  },
  doChangePassword: (oldPassword, newPassword) => async dispatch => {
    try {
      dispatch({
        type: authActions.PASSWORD_CHANGE_START,
      });

      await service.changePassword(oldPassword, newPassword);

      dispatch({
        type: authActions.PASSWORD_CHANGE_SUCCESS,
      });
      await dispatch(authActions.doRefreshCurrentUser());
      Message.success('Le mot de passe a été changé avec succès');
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: authActions.PASSWORD_CHANGE_ERROR,
      });
      Message.error(Errors.selectMessage(error));
    }
  },
};
export default authActions;
