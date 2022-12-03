import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;

	return (
		<div className='product-card-container'>
			<img
				src={imageUrl}
				alt={`${name}`}
			/>
			<div className='footer'>
				<div className='name'>{name}</div>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType='inverted'>Add to cart</Button>
		</div>
	);
};

export default ProductCard;
