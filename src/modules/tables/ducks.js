import config from './../../configs/main.json';

// define constants
export const SET_TABLE_DATA = 'solar/table/SET_TABLE_DATA';

// define reducer initial state
const initialState = {
  sensors: []
};

export default function tablesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TABLE_DATA: {
      return {
        ...state,
        sensors: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export function getTableData() {
  return async (dispatch) => {
    // prepare data
    const queries = 'limit=100';
    const url = `${config.server.url}/sensors/data?${queries}`;
    const options = { method: 'GET' }

    // make request
    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      const sortedData = data
        .map(v => ({ ...v, timestamp: v.timestamp - 10800000 }))
        .sort((a, b) => b.id - a.id);

      // dispatch data
      dispatch({
        type: SET_TABLE_DATA,
        payload: sortedData
      })
    } catch (e) {
      console.log(e);
    }
  }
}
