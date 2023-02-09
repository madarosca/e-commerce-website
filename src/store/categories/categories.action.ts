import { createAction, Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES, Category, CategoryItem } from './categories.types';
import { withMatcher } from '../../utils/reducer/reducer.utils';

export type SetCategories = ActionWithPayload<CATEGORIES_ACTION_TYPES.SET_CATEGORIES, CategoryItem[]>;

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

export const fetchCategoriesStart = withMatcher(() => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]) =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
);

export const fetchCategoriesFailed = withMatcher((error: Error) =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

export const setCategories = withMatcher((categoriesArray: Category[]) =>
	createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
);

const updateCategories = (categoriesArray: Category[], updatedCategory: CategoryItem): Category[] => {
	return categoriesArray.map((category) => {
		const updatedItems = category.items.map((item) =>
			item.id === updatedCategory.id ? { ...item, whishlist: updatedCategory.whishlist } : item
		);
		return {
			...category,
			items: updatedItems,
		};
	});
};

export const updateCategoriesItems = (categoriesArray: Category[], updatedCategory: CategoryItem) => {
	const newCategoryItems = updateCategories(categoriesArray, updatedCategory);
	return setCategories(newCategoryItems);
};
