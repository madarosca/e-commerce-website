import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, CheckoutEmpty, Total } from './checkout.styles.jsx';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>Product</HeaderBlock>
				<HeaderBlock>Description</HeaderBlock>
				<HeaderBlock>Quantity</HeaderBlock>
				<HeaderBlock>Price</HeaderBlock>
				<HeaderBlock>Remove</HeaderBlock>
			</CheckoutHeader>
			{!cartItems.length ? (
				<CheckoutEmpty>Your shopping cart is empty!</CheckoutEmpty>
			) : (
				cartItems.map((cartItem) => (
					<CheckoutItem
						key={cartItem.id}
						cartItem={cartItem}
					/>
				))
			)}
			{cartTotal > 0 && <Total>Total: ${cartTotal}</Total>}
		</CheckoutContainer>
	);
};

export default Checkout;
