import actions from './donsListActions';

const initialData = {
  loading: false,
  rows: [],
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
  if (type === actions.RESETED) {
    return {
      ...initialData,
    };
  }

  // if (type === actions.TOGGLE_ONE_SELECTED) {
  //   let selectedKeys = state.selectedKeys;

  //   const exists = selectedKeys.includes(payload);

  //   if (exists) {
  //     selectedKeys = selectedKeys.filter(
  //       (key) => key !== payload,
  //     );
  //   } else {
  //     selectedKeys = [payload, ...selectedKeys];
  //   }

  //   return {
  //     ...state,
  //     selectedKeys,
  //   };
  // }

  // if (type === actions.TOGGLE_ALL_SELECTED) {
  //   const isAllSelected =
  //     (state.rows || []).length ===
  //     (state.selectedKeys || []).length;

  //   return {
  //     ...state,
  //     selectedKeys: isAllSelected
  //       ? []
  //       : state.rows.map((row) => row.id),
  //   };
  // }

  // if (type === actions.CLEAR_ALL_SELECTED) {
  //   return {
  //     ...state,
  //     selectedKeys: [],
  //   };
  // }

  // if (type === actions.PAGINATION_CHANGED) {
  //   return {
  //     ...state,
  //     pagination: payload || {
  //       current: 1,
  //       pageSize: INITIAL_PAGE_SIZE,
  //     },
  //   };
  // }

  // if (type === actions.SORTER_CHANGED) {
  //   return {
  //     ...state,
  //     sorter: payload || {},
  //   };
  // }

  return state;
};
