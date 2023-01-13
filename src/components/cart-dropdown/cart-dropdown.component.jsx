import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectIsCartOpen, selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const isCartOpen = useSelector(selectIsCartOpen);
	const navigate = useNavigate();
	const goToCheckoutHandler = () => {
		navigate('checkout');
		dispatch(setIsCartOpen(!isCartOpen));
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem
							key={cartItem.id}
							cartItem={cartItem}
						/>
					))
				) : (
					<EmptyMessage>Your shopping cart is empty!</EmptyMessage>
				)}
			</CartItems>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.cart}
				onClick={goToCheckoutHandler}
			>
				GO TO CHECKOUT
			</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
