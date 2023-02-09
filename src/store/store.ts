import { configureStore, Middleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'whishlist'],
};

const sagaMiddleware = createSagaMiddleware();

const middleWares = [/*process.env.NODE_ENV !== 'production' && logger,*/ sagaMiddleware /*, thunk*/]/*.filter(
	(middleware): middleware is Middleware => Boolean(middleware)
);*/

const persistedReducer = persistReducer(persistConfig, rootReducer);

// use RTK
export const store = configureStore({
	reducer: persistedReducer,
	middleware: middleWares,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
