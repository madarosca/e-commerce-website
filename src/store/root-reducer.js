// import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/categories.reducer';
import { userReducer } from './user/user.reducer';

// in the future, use RTK
export const rootReducer = {
	user: userReducer,
	categories: categoriesReducer,
};

// export const rootReducer = combineReducers({
// 	user: userReducer,
// });
