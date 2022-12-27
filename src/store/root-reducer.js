import { categoriesReducer } from './categories/categories.reducer';
import { userReducer } from './user/user.reducer';

// use RTK
export const rootReducer = {
	user: userReducer,
	categories: categoriesReducer,
};
