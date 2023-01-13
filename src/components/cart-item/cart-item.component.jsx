import { useDispatch, useSelector } from 'react-redux';
import { clearItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItemContainer, Image, ItemDetails, Name, RemoveButton } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

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
