import {
	setSocketConnection,
	dropSocketMessagesQueue
} from "./../../modules/socket/ducks";
import { setSensorsData } from './../../modules/sensors/ducks';

// constants
export const MESSAGE_SET_CONNECTION = 'connect';
export const MESSAGE_SET_SENSORS_DATA = 'solar/server/SET_SENSORS_DATA';
/**
 * Helper for subscribing on server events
 * @param {object} socket - socket.io instance
 * @param {object} store - redux app store
 */
export default function subscribe(socket, store) {
	// handle connect message
	socket.on(MESSAGE_SET_CONNECTION, () => {
		store.dispatch(
			setSocketConnection(socket.id)
		);
		store.dispatch(
			dropSocketMessagesQueue()
		);
	});
	socket.on(MESSAGE_SET_SENSORS_DATA, (payload) => {
		store.dispatch(
			setSensorsData(payload)
		);
	});
}
