import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { Footer, Image, ProductCardContainer } from './product-card.styles';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCardContainer>
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
