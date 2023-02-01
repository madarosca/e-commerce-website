import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { getMainCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchMainCategoriesSuccess, fetchMainCategoriesFailed } from './mainCategories.action';
import { MAIN_CATEGORIES_ACTION_TYPES } from './mainCategories.types';

export function* fetchMainCategoriesAsync() {
	try {
        const mainCategories = yield* call(getMainCategoriesAndDocuments);
        
		yield* put(fetchMainCategoriesSuccess(mainCategories));
	} catch (error) {
		yield* put(fetchMainCategoriesFailed(error as Error));
	}
}

export function* onFetchMainCategories() {
	yield* takeLatest(MAIN_CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_START, fetchMainCategoriesAsync);
}

export function* mainCategoriesSaga() {
	yield* all([call(onFetchMainCategories)]);
}
