import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartItemContainer, Image, ItemDetails, Name, RemoveButton } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	const { clearItemFromCart } = useContext(CartContext);

	const clearItemHandler = () => clearItemFromCart(cartItem);

	return (
		<CartItemContainer>
			<Image
				src={imageUrl}
				alt={`${name}`}
			/>
			<ItemDetails>
				<Name>{name}</Name>
				<span>
					{quantity} x ${price}
				</span>
			</ItemDetails>
			<RemoveButton onClick={clearItemHandler}>x</RemoveButton>
		</CartItemContainer>
	);
};

export default CartItem;
