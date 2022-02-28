import actions from './projetListActions';

const initialData = {
  loading: false,
  rows: [],
  count: 0,
  sorter: {},
};

export default (state = initialData, {type, payload}) => {
  if (type === actions.SORTER_CHANGED) {
    return {
      ...state,
      sorter: payload || {},
    };
  }

  if (type === actions.RESETED) {
    return {
      ...initialData,
    };
  }

  if (type === actions.FETCH_STARTED) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === actions.FETCH_SUCCESS) {
    return {
      ...state,
      loading: false,
      rows: payload.rows,
      count: payload.count,
    };
  }

  if (type === actions.FETCH_ERROR) {
    return {
      ...state,
      loading: false,
      rows: [],
      count: 0,
    };
  }

  return state;
};
