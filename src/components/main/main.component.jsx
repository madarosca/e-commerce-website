import MainItem from '../main-item/main-item.component';
import { CategoriesContainer } from './main.styles.jsx';
import { categories } from '../../constants/constants.js';

const Main = () => {
	return (
		<CategoriesContainer>
			{categories.map((category) => (
				<MainItem
					key={category.id}
					category={category}
				/>
			))}
		</CategoriesContainer>
	);
};

export default Main;
