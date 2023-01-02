import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// use RTK
export const store = configureStore({
	reducer: persistedReducer,
	middleware: middleWares,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
