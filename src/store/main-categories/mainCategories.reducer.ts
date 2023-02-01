import { AnyAction } from 'redux';
import { MainCategory } from './mainCategories.types';
import {
	fetchMainCategoriesStart,
	fetchMainCategoriesSuccess,
	fetchMainCategoriesFailed,
} from './mainCategories.action';

export type MainCategoriesState = {
	readonly mainCategories: MainCategory[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const MAIN_CATEGORIES_INITIAL_STATE: MainCategoriesState = {
	mainCategories: [],
	isLoading: false,
	error: null,
};

export const mainCategoriesReducer = (
	state = MAIN_CATEGORIES_INITIAL_STATE,
	action: AnyAction
): MainCategoriesState => {
	if (fetchMainCategoriesStart.match(action)) {
		return { ...state, isLoading: true };
	}

	if (fetchMainCategoriesSuccess.match(action)) {
		return { ...state, mainCategories: action.payload, isLoading: false };
	}

	if (fetchMainCategoriesFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false };
	}

	return state;
};
