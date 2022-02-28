import actions from './detailsCampagneListActions';

const INITIAL_PAGE_SIZE = 10;

const initialData = {
  rows: [],
  loading: false,
  count: 0,
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
