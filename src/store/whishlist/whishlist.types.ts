import { CategoryItem } from '../categories/categories.types';

export enum WHISHLIST_ACTION_TYPES {
	SET_WHISHLIST_ITEMS = 'whishlist/SET_WHISHLIST_ITEMS',
}

export type WhishlistItem = CategoryItem;
