// define constants
export const SET_SENSORS_DATA = 'solar/sensors/SET_SENSORS_DATA';

// reducer initial state
const sensors = {
  light: { sensorId: 0 },
	temperature: { sensorId: 1 },
  voltage: { sensorId: 2 },
  current: { sensorId: 3 },
  activePower: { sensorId: 4 },
  reactivePower: { sensorId: 5 }
}
export const initialState = { ...sensors };

/**
 * Sensors reducer
 * @param {object} state - reducer local state
 * @param {object} action - dispatched action
 * @return {{}}
 */
export default function sensorsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_SENSORS_DATA : {
			return {
				...state,
				...action.payload
			};
		}
		default : {
			return state;
		}
	}
}

/**
 * Action creator for setting sensors data
 * @param {Array} data - sensors data array
 * @return {{type: string, payload: {}}}
 */
export function setSensorsData(data) {
  console.log(data);
  // normalize data
  const normalizedData = data.reduce((reducer, sensorData) => {
    const sensorName = getSensorNameById(sensorData.sensorId);
    reducer[sensorName] = sensorData;
    return reducer;
  }, {});

  // return action
  return {
    type: SET_SENSORS_DATA,
    payload: normalizedData
  };
}

/**
 * Helper for getting sensor name by it`s id
 * @param {int} sensorId - sensor id
 */
function getSensorNameById(sensorId) {
  const [sensorName] = Object.entries(sensors).find(([, v]) => (
    v.sensorId === sensorId
  ));
  return sensorName;
}
