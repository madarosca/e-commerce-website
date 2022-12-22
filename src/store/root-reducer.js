import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';

// in the future, use RTK
// export const rootReducer = {
// 	user: userReducer,
// };

export const rootReducer = combineReducers({
	user: userReducer,
});
