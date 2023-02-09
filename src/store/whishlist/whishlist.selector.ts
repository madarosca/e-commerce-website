import { createSelector } from 'reselect';
import { RootState } from '../store';
import { WhishlistState } from './whishlist.reducer';

const selectWhishlistReducer = (state: RootState): WhishlistState => state.whishlist;

export const selectWhishlistItems = createSelector([selectWhishlistReducer], (whishlist) => whishlist.whishlistItems);

export const selectWhishlistCount = createSelector([selectWhishlistItems], (whishlistItems) => whishlistItems.length);
