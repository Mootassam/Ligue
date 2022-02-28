import actions from './authActions';
import AuthCurrentTenant from './authCurrentTenant';
const initialState = {
  currentUser: null,
  currentTenant: null,
  loadingInit: true,
  loadingUpdateProfile: false,
  loading: false,
  errorMessage: null,
  loadingPasswordChange: false,
  record: null,
};

export default (state = initialState, {type, payload}) => {
  if (type === actions.ERROR_MESSAGE_CLEARED) {
    return {
      ...state,
      errorMessage: null,
    };
  }
  if (type === actions.AUTH_START) {
    return {
      ...state,
      errorMessage: null,
      loading: true,
    };
  }
  if (type === actions.AUTH_SUCCESS) {
    return {
      ...state,
      loading: false,
      currentUser: payload.currentUser || null,
      currentTenant: AuthCurrentTenant.selectAndSaveOnStorageFor(
        payload.currentUser,
      ),
      errorMessage: null,
    };
  }
  if (type === actions.AUTH_ERROR) {
    return {
      ...state,
      loading: false,
      errorMessage: payload || null,
      currentUser: null,
      currentTenant: null,
    };
  }
  if (type == actions.AUTH_FINGER_START) {
    return {...state, record: null};
  }
  if (type == actions.AUTH_FINGER_SUCCESS) {
    return {...state, record: payload};
  }
  if (type == actions.AUTH_FINGER_ERROR) {
    return {...state, record: null};
  }

  if (type === actions.CURRENT_USER_REFRESH_SUCCESS) {
    return {
      ...state,
      currentUser: payload.currentUser || null,
      currentTenant: AuthCurrentTenant.selectAndSaveOnStorageFor(
        payload.currentUser,
      ),
    };
  }

  if (type === actions.AUTH_INIT_SUCCESS) {
    return {
      ...state,
      currentUser: payload.currentUser || null,
      currentTenant: AuthCurrentTenant.selectAndSaveOnStorageFor(
        payload.currentUser,
      ),
      loadingInit: false,
    };
  }

  if (type === actions.AUTH_INIT_ERROR) {
    return {
      ...state,
      currentUser: null,
      currentTenant: null,
      loadingInit: false,
    };
  }
  if (type === actions.CURRENT_USER_REFRESH_ERROR) {
    return {
      ...state,
      currentUser: null,
      currentTenant: AuthCurrentTenant.selectAndSaveOnStorageFor(null),
    };
  }

  if (type === actions.UPDATE_PROFILE_START) {
    return {
      ...state,
      loadingUpdateProfile: true,
    };
  }

  if (type === actions.UPDATE_PROFILE_SUCCESS) {
    return {
      ...state,
      loadingUpdateProfile: false,
    };
  }

  if (type === actions.UPDATE_PROFILE_ERROR) {
    return {
      ...state,
      loadingUpdateProfile: false,
    };
  }

  if (type === actions.PASSWORD_CHANGE_START) {
    return {
      ...state,
      loadingPasswordChange: true,
    };
  }

  if (type === actions.PASSWORD_CHANGE_SUCCESS) {
    return {
      ...state,
      loadingPasswordChange: false,
    };
  }

  if (type === actions.PASSWORD_CHANGE_ERROR) {
    return {
      ...state,
      loadingPasswordChange: false,
    };
  }
  return state;
};
