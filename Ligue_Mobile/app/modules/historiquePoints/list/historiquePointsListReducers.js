import actions from './historiquePointsListActions';

const initialData = {
  rows: [],
  count: 0,
  loading: false,
};

export default (state = initialData, {type, payload}) => {
  if (type === actions.FETCH_STARTED) {
    return {
      ...state,
      loading: true,
      rows: [],
    };
  }

  if (type === actions.FETCH_SUCCESS) {
    return {
      ...state,
      loading: false,
      rows: payload.record,
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
