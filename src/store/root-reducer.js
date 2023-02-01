import { mainCategoriesReducer } from './main-categories/mainCategories.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { combineReducers } from 'redux';

// use RTK
export const rootReducer = combineReducers({
	user: userReducer,
	mainCategories: mainCategoriesReducer,
	categories: categoriesReducer,
	cart: cartReducer,
});
