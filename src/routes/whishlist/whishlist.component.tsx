import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { WhishlistContainer, WhishlistEmpty } from './whishlist.styles';

const Whishlist = () => {
	const cartItems = useSelector(selectCartItems);

	return (
		<WhishlistContainer>
			{!cartItems.length ? (
				<WhishlistEmpty>Your shopping cart is empty!</WhishlistEmpty>
			) : (
				<div>Favourites</div>
				// cartItems.map((cartItem) => (
				// 	<WhishlistItem
				// 		key={cartItem.id}
				// 		cartItem={cartItem}
				// 	/>
				// ))
			)}
		</WhishlistContainer>
	);
};

export default Whishlist;
