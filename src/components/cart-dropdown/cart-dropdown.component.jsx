import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();
	const goToCheckoutHandler = () => {
		navigate('checkout');
		setIsCartOpen(!isCartOpen);
	};

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{!cartItems.length ? (
					<div className='cart-empty'>Your shopping cart is empty!</div>
				) : (
					cartItems.map((cartItem) => (
						<CartItem
							key={cartItem.id}
							cartItem={cartItem}
						/>
					))
				)}
			</div>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
