import { categoriesReducer } from './categories/categories.reducer';
import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { combineReducers } from 'redux';

// use RTK
export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
});
