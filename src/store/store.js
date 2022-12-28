import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
	if (!action.type) {
		return next(action);
	}

	console.log({ type: action.type, payload: action.payload, currentState: store.getState() });

	next(action);

	console.log('next state: ', store.getState());
};

// use RTK
export const store = configureStore({
	reducer: rootReducer,
	middleware: [loggerMiddleware],
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
