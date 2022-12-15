import './main.styles.scss';
import MainItem from '../main-item/main-item.component';

const Main = ({ categories }) => {
	return (
		<div className='categories-container'>
			{categories.map((category) => (
				<MainItem
					key={category.id}
					category={category}
				/>
			))}
		</div>
	);
};

export default Main;
