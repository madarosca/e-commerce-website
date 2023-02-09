import { AnyAction } from 'redux';
import { setWhishlistItems } from './whishlist.action';
import { WhishlistItem } from './whishlist.types';

export type WhishlistState = {
	readonly whishlistItems: WhishlistItem[];
};

const WHISHLIST_INITIAL_STATE: WhishlistState = {
	whishlistItems: [],
};

export const whishlistReducer = (state = WHISHLIST_INITIAL_STATE, action: AnyAction): WhishlistState => {
	if (setWhishlistItems.match(action)) {
		return { ...state, whishlistItems: action.payload };
	}

	return state;
};
