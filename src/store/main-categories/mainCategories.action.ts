import { createAction, Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { MAIN_CATEGORIES_ACTION_TYPES, MainCategory } from './mainCategories.types';
import { withMatcher } from '../../utils/reducer/reducer.utils';

export type FetchMainCategoriesStart = Action<MAIN_CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_START>;

export type FetchMainCategoriesSuccess = ActionWithPayload<
	MAIN_CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_SUCCESS,
	MainCategory[]
>;

export type FetchMainCategoriesFailed = ActionWithPayload<
	MAIN_CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_FAILED,
	Error
>;

export const fetchMainCategoriesStart = withMatcher(() =>
	createAction(MAIN_CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_START)
);

export const fetchMainCategoriesSuccess = withMatcher((mainCategoriesArray: MainCategory[]) =>
	createAction(MAIN_CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_SUCCESS, mainCategoriesArray)
);

export const fetchMainCategoriesFailed = withMatcher((error: Error) =>
	createAction(MAIN_CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_FAILED, error)
);
