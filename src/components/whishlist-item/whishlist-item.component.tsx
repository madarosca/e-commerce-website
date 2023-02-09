import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { removeItemToWhishlist } from '../../store/whishlist/whishlist.action';
import { selectWhishlistItems } from '../../store/whishlist/whishlist.selector';
import { WhishlistItem } from '../../store/whishlist/whishlist.types';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { WhishlistItemContainer, Image, Footer, DeleteButton } from './whishlist-item.styles';

type WhishlistItemProps = {
	whishlistItem: WhishlistItem;
};

const WhishlistItemPage: FC<WhishlistItemProps> = memo(({ whishlistItem }) => {
	const { name, imageUrl, price } = whishlistItem;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const whishlistItems = useSelector(selectWhishlistItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, whishlistItem));
	const deleteFromWishlist = () => dispatch(removeItemToWhishlist(whishlistItems, whishlistItem));

	return (
		<WhishlistItemContainer>
			<DeleteButton onClick={deleteFromWishlist}>Add to whishlist</DeleteButton>
			<Image
				src={imageUrl}
				alt={`${name}`}
			/>
			<Footer>
				<div>{name}</div>
				<span>${price}</span>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to cart
			</Button>
		</WhishlistItemContainer>
	);
});

export default WhishlistItemPage;
