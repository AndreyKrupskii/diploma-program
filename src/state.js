import { combineReducers } from 'redux';
import socket from './modules/socket/ducks';
import sensors from './modules/sensors/ducks';

// define global action types constants
export const RESET_STATE = 'solar/root/RESET_STATE';

// define root reducer
const combinedReducers = combineReducers({
	socket,
	sensors
});

/**
 * Reducer - root reducer
 * @param {object} state - redux store state
 * @param {object} action - dispatched action
 * @return {object}
 */
export default function rootReducer(state, action) {
	// handle reset state action
	if (action.type === RESET_STATE) {
		state = undefined;
	}

	// process dispatched action
	return combinedReducers(state, action);
}

/**
 * Action creator for resetting redux store state
 * @return {{type: string}}
 */
export function resetState() {
	return { type: RESET_STATE };
}
