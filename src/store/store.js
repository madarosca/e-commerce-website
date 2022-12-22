import { compose, createStore, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
//import { userReducer } from './user/user.reducer';

// in the future, use RTK
// export const store = configureStore({
// 	reducer: rootReducer,
//  middleware: [thunk, logger],
// });

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);