import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import socket from './services/socket_middleware';
import rootReducer from './state';
import envs from './entities/env';

/**
 * Helper for config store
 * @return {object}
 */
export function configStore() {
	// store middleware
	const middleware = [
		thunk,
		socket
	];

	// check env and add logger
	if (process.env.NODE_ENV !== envs.PRODUCTION) {
		middleware.push(createLogger());
	}

	// create store
	return createStore(
		rootReducer,
		applyMiddleware(...middleware)
	);
}

export default configStore();
