import io from 'socket.io-client';
import subscribe from './subscribe';
import createEmitter from './emitter';
import {
	GET_SOCKET_CONNECTION,
	DROP_SOCKET_CONNECTION,
	DROP_SOCKET_MESSAGES_QUEUE
} from './../../modules/socket/ducks';

// constants

/**
 * Helper for creating redux socket middleware
 * It subscribes on some redux actions and handle them via socket messages
 * @return {function(*): function(*): function(*)}
 */
function createSocketMiddleware() {
	// prepare data
	let socket = null;

	// create redux middleware
	// for more details see http://redux.js.org/docs/advanced/Middleware.html
	return store => next => action => {
		// define emitter
		const emit = createEmitter(socket, store);

		// handle dispatched actions
		switch (action.type) {
			case GET_SOCKET_CONNECTION : {
				// connect to socket server
				socket = io(action.payload.url);

				// subscribe to socket server
				subscribe(socket, store);

				return next(action);
			}
			case DROP_SOCKET_CONNECTION : {
				// disconnect from socket server
				if (socket) {
					socket.disconnect();
				}

				return next(action);
			}
			case DROP_SOCKET_MESSAGES_QUEUE : {
				// define messages queue
				const state = store.getState();
				const messagesQueue = state.socket.messagesQueue || [];

				// emit all messages from queue
				messagesQueue.forEach((v) => emit(v.message, v.payload));

				return next(action);
			}

			// case GET_THEMES : {
			// 	// emit
			// 	emit(MESSAGE_GET_THEMES, action.payload);

			// 	return next(action);
			// }

			default: {
				return next(action);
			}
		}
	};
}

export default createSocketMiddleware();
