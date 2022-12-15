import './main-item.styles.scss';

const MainItem = ({ category }) => {
	const { title, imageUrl } = category;

	return (
		<div className='main-item-container'>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className='body'>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default MainItem;
