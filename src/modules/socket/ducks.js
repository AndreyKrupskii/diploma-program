// constants
export const GET_SOCKET_CONNECTION = 'solar/socket/GET_SOCKET_CONNECTION';
export const SET_SOCKET_CONNECTION = 'solar/socket/SET_SOCKET_CONNECTION';
export const DROP_SOCKET_CONNECTION = 'solar/socket/DROP_SOCKET_CONNECTION';
export const SET_SOCKET_MESSAGE_TO_QUEUE = 'solar/socket/SET_SOCKET_MESSAGE_TO_QUEUE';
export const DROP_SOCKET_MESSAGES_QUEUE = 'solar/socket/DROP_SOCKET_MESSAGES_QUEUE';

// reducer initial state
export const initialState = {
	id: null,
	url: null,
	messagesQueue: []
};

/**
 * Reducer - socket reducer
 * @param {object} state - reducer local state
 * @param {object} action - dispatched action
 * @return {*}
 */
export default function socketReducer(state = initialState, action) {
	switch (action.type) {
		case GET_SOCKET_CONNECTION : {
			return {
				...state,
				id: null,
				url: action.payload.url
			};
		}
		case SET_SOCKET_CONNECTION : {
			return {
				...state,
				id: action.payload
			};
		}
		case DROP_SOCKET_CONNECTION : {
			return initialState;
		}
		case SET_SOCKET_MESSAGE_TO_QUEUE : {
			return {
				...state,
				messagesQueue: state.messagesQueue.concat(
					action.payload
				)
			};
		}
		case DROP_SOCKET_MESSAGES_QUEUE : {
			return {
				...state,
				messagesQueue: []
			};
		}
		default : {
			return state;
		}
	}
}

/**
 * Action creator for socket connecting
 * @param {object} url - socket-io connect url
 * @param {object} [options] - socket-io connect option
 * @return {object}
 */
export function getSocketConnection(url, options = {}) {
	return {
		type: GET_SOCKET_CONNECTION,
		payload: { url }
	};
}

/**
 * Action creator for success socket connecting
 * @return {object}
 */
export function setSocketConnection(id) {
	return {
		type: SET_SOCKET_CONNECTION,
		payload: id
	};
}

/**
 * Action creator for disconnecting socket
 * @return {object}
 */
export function dropSocketConnection() {
	return {
		type: DROP_SOCKET_CONNECTION
	};
}

/**
 * Action creator for setting message to the messages queue
 * @param {string} message - socket message title
 * @param {*} payload - socket message payload
 * @return {object}
 */
export function setSocketMessageToQueue(message, payload) {
	return {
		type: SET_SOCKET_MESSAGE_TO_QUEUE,
		payload: {
			message,
			payload
		}
	};
}

/**
 * Action creator for dropping socket messages queue
 * @return {object}
 */
export function dropSocketMessagesQueue() {
	return {
		type: DROP_SOCKET_MESSAGES_QUEUE
	};
}
