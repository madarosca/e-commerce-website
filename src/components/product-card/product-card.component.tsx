import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem } from '../../store/categories/categories.types';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
	Footer,
	Image,
	ProductCardContainer,
	WhishlistIcon,
	WhishlistIconEmpty,
	WhishlistIconFull,
} from './product-card.styles';
import { addItemToWhishlist, removeItemToWhishlist } from '../../store/whishlist/whishlist.action';
import { selectWhishlistItems } from '../../store/whishlist/whishlist.selector';
import { selectCategories } from '../../store/categories/categories.selector';
import { updateCategoriesItems } from '../../store/categories/categories.action';

type ProductCardProps = {
	product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const whishlistItems = useSelector(selectWhishlistItems);
	const categories = useSelector(selectCategories);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
	const addToWishlist = () => {
		dispatch(updateCategoriesItems(categories, { ...product, whishlist: true }));
		dispatch(addItemToWhishlist(whishlistItems, product));
	};
	const deleteFromWishlist = () => {
		dispatch(updateCategoriesItems(categories, { ...product, whishlist: false }));
		dispatch(removeItemToWhishlist(whishlistItems, product));
	};

	return (
		<ProductCardContainer>
			{/* <WhishlistIcon
				isInWishlist={true}
				onClick={!product.whishlist ? addToWishlist : deleteFromWishlist}
			/> */}
			{!product.whishlist ? (
				<WhishlistIconEmpty onClick={addToWishlist} />
			) : (
				<WhishlistIconFull onClick={deleteFromWishlist} />
			)}
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
		</ProductCardContainer>
	);
};

export default ProductCard;
