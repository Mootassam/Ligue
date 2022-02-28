import actions from "./projetViewActions";

const initialData = {
  loading: false,
  rows: null,
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.FIND_STARTED) {
    return {
      ...state,
      rows: null,
      loading: true,
    };
  }

  if (type === actions.FIND_SUCCESS) {
    return {
      ...state,
      rows: payload,
      loading: false,
    };
  }

  if (type === actions.FIND_ERROR) {
    return {
      ...state,
      rows: null,
      loading: false,
    };
  }

  return state;
};
