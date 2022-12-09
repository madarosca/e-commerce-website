import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
    const { clearItemFromCart } = useContext(CartContext);
    
	const clearItemHandler = () => clearItemFromCart(cartItem);

	return (
		<div className='cart-item-container'>
			<img
				src={imageUrl}
				alt={`${name}`}
			/>
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</div>
			<div
				className='remove-button'
				onClick={clearItemHandler}
			>
				x
			</div>
		</div>
	);
};

export default CartItem;
