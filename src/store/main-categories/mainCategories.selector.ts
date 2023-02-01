import { createSelector } from 'reselect';
import { RootState } from '../store';
import { MainCategoriesState } from './mainCategories.reducer';

const selectMainCategoryReducer = (state: RootState): MainCategoriesState => state.mainCategories;

export const selectMainCategories = createSelector(
	[selectMainCategoryReducer],
	(mainCategoriesSlice) => mainCategoriesSlice.mainCategories
);

export const selectMainCategoriesIsLoading = createSelector(
	[selectMainCategoryReducer],
	(mainCategoriesSlice) => mainCategoriesSlice.isLoading
);
