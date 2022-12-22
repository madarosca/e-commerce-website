import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categories.types';

export const setCategories = (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
