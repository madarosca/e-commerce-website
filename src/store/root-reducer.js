import { categoriesReducer } from './categories/categories.reducer';
import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';

// use RTK
export const rootReducer = {
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
};
