import moment from 'moment';
import config from './../../configs/main.json';

// define constants
export const SET_LIGHT_GRAPH_DATA = 'solar/graph/SET_LIGHT_GRAPH_DATA';
export const SET_POWER_GRAPH_DATA = 'solar/graph/SET_POWER_GRAPH_DATA';

// define reducer initial state
const initialState = {
  light: {
    labels: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
    series: [[300, 387, 385, 250, 0, 0, 0, 25]],
    options: {
      low: 0,
      high: 800,
      showArea: false,
      height: "245px",
      axisX: {
        showGrid: false
      },
      lineSmooth: true,
      showLine: true,
      showPoint: true,
      fullWidth: true,
      chartPadding: {
        right: 50
      }
    },
    responsive: [
      [
        "screen and (max-width: 640px)",
        {
          axisX: { labelInterpolationFnc: value => value[0]}
        }
      ]
    ],
    legend: {
      names: ["Освітленість, ЛК"],
      types: ["info"]
    }
  },
  power: {
    labels: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    series: [
      [10, 12, 18, 20, 23, 28, 33, 34, 30, 28, 27, 23],
      [5, 7, 8, 9, 12, 13, 15, 16, 16, 10, 7, 6]
    ],
    options: {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "245px"
    },
    responsive: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: { labelInterpolationFnc: value => value[0] }
        }
      ]
    ],
    legend: {
      names: ["Активна потужність, Вт", "Реактивна потужність, Вар"],
      types: ["info", "danger"]
    }
  }
};

/**
 * Reducer for graphs data
 * @param {{}} state - reducer state
 * @param {{}} action - dispatched action
 */
export default function graphsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIGHT_GRAPH_DATA: {
      return {
        ...state,
        light: {
          ...state.light,
          labels: action.payload.labels,
          series: action.payload.series,
          options: {
            ...state.light.options,
            ...action.payload.options
          }
        }
      };
    }
    case SET_POWER_GRAPH_DATA: {
      return {
        ...state,
        power: {
          ...state.power,
          labels: action.payload.labels,
          series: action.payload.series
        }
      };
    }
    default: {
      return state;
    }
  }
}

export function getLightGraphData() {
  return async (dispatch) => {
    // prepare data
    const queries = 'sensorId=0&dateFrom=1527980399999&dateTo=1528066800001';
    const url = `${config.server.url}/sensors/data?${queries}`;
    const options = { method: 'GET' }

    // make request
    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      const sortedData = data
        .map(v => ({ ...v, timestamp: v.timestamp - 10800000 }))
        .sort((a, b) => a.timestamp - b.timestamp);

      // dispatch data
      dispatch({
        type: SET_LIGHT_GRAPH_DATA,
        payload: {
          labels: sortedData.map(v => moment(v.timestamp).format('HH')),
          series: [sortedData.map(v => v.value)],
          options: {
            high: sortedData.sort((a, b) => b.value - a.value)[0].value
          }
        }
      })
    } catch (e) {
      console.log(e);
    }
  }
}

export function getPowerGraphData() {
  return async (dispatch) => {
    // prepare data
    const activeId = 4;
    const reactiveId = 5;
    const queries = `sensorId=${activeId}&sensorId=${reactiveId}&dateFrom=1527980399999&dateTo=1528066800001`;
    const url = `${config.server.url}/sensors/data?${queries}`;
    const options = { method: 'GET' }

    // make request
    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      const sortedData = data
        .map(v => ({ ...v, timestamp: v.timestamp - 10800000 }))
        .sort((a, b) => a.timestamp - b.timestamp);
      const activePower = sortedData.filter(v => v.sensorId === activeId);
      const reactivePower = sortedData.filter(v => v.sensorId === reactiveId);

      // dispatch data
      dispatch({
        type: SET_POWER_GRAPH_DATA,
        payload: {
          labels: activePower.map(v => moment(v.timestamp).format('HH')),
          series: [activePower.map(v => v.value), reactivePower.map(v => v.value),]
        }
      })
    } catch (e) {
      console.log(e);
    }
  }
}
