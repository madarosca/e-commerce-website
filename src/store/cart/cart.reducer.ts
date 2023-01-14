import { AnyAction } from 'redux';
import { setCartItems, setIsCartOpen } from './cart.action';
import { CartItem, IsCartOpen } from './cart.types';


export type CartState = {
    readonly cartItems: CartItem[];
    readonly isCartOpen: IsCartOpen;
}

const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
    if (setIsCartOpen.match(action)) {
        return { ...state, isCartOpen: action.payload }
    }

    if (setCartItems.match(action)) {
        return { ...state, cartItems: action.payload }
    }

    return state;
}
