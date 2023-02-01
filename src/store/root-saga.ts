import { all, call } from 'typed-redux-saga/macro';
import { mainCategoriesSaga } from './main-categories/mainCategories.saga';
import { categoriesSaga } from './categories/categories.saga';
import { userSagas } from './user/user.saga';

export function* rootSaga() {
	yield* all([call(mainCategoriesSaga), call(categoriesSaga), call(userSagas)]);
}
