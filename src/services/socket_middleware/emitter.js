import { setSocketMessageToQueue } from './../../modules/socket/ducks';

/**
 * Helper for creating socket emitter
 * @param {object|null} socket - socket.io instance
 * @param {object} store - redux store instance
 * @return {function(*=, *=)}
 */
export default function createEmitter(socket, store) {
	// check input data
	if (!store) {
		throw new Error('Store is not defined.');
	}

	/**
	 * Helper for emitting to the server
	 * @param {string} - message
	 * @param {any} - socket message payload
	 */
	return (message, payload) => {
		// check socket connection existence
		if (!socket) {
			// add message to queue
			return store.dispatch(setSocketMessageToQueue(
				message,
				payload
			));
		} else {
			// emit
			return socket.emit(message, payload);
		}
	};
}
