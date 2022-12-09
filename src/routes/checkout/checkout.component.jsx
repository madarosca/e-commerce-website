import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<span className='header-block'>Product</span>
				<span className='header-block'>Description</span>
				<span className='header-block'>Quantity</span>
				<span className='header-block'>Price</span>
				<span className='header-block'>Remove</span>
			</div>
			{!cartItems.length ? (
				<div className='checkout-empty'>Your shopping cart is empty!</div>
			) : (
				cartItems.map((cartItem) => (
					<CheckoutItem
						key={cartItem.id}
						cartItem={cartItem}
					/>
				))
			)}
			{cartTotal > 0 && <div className='total'>Total: ${cartTotal}</div>}
		</div>
	);
};

export default Checkout;
