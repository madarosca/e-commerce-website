import { createAction, withMatcher, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { WHISHLIST_ACTION_TYPES, WhishlistItem } from './whishlist.types';

export type SetWhishlistItems = ActionWithPayload<WHISHLIST_ACTION_TYPES.SET_WHISHLIST_ITEMS, WhishlistItem[]>;

export const setWhishlistItems = withMatcher(
	(whishlistItems: WhishlistItem[]): SetWhishlistItems =>
		createAction(WHISHLIST_ACTION_TYPES.SET_WHISHLIST_ITEMS, whishlistItems)
);

const addWhishlistItem = (whishlistItems: WhishlistItem[], itemToAdd: WhishlistItem): WhishlistItem[] => {
	const existingWhishlistItem = whishlistItems.find((whishlistItem) => whishlistItem.id === itemToAdd.id);

	if (existingWhishlistItem) return whishlistItems;

	return [...whishlistItems, { ...itemToAdd, whishlist: true }];
};

const removeWhishlistItem = (whishlistItems: WhishlistItem[], whishlistItemToRemove: WhishlistItem): WhishlistItem[] =>
	whishlistItems.filter((whishlistItem) => whishlistItem.id !== whishlistItemToRemove.id);

export const addItemToWhishlist = (whishlistItems: WhishlistItem[], itemToAdd: WhishlistItem) => {
	const newWhishlistItems = addWhishlistItem(whishlistItems, itemToAdd);
	return setWhishlistItems(newWhishlistItems);
};

export const removeItemToWhishlist = (whishlistItems: WhishlistItem[], whishlistItemToRemove: WhishlistItem) => {
	const newWhishlistItems = removeWhishlistItem(whishlistItems, whishlistItemToRemove);
	return setWhishlistItems(newWhishlistItems);
};
