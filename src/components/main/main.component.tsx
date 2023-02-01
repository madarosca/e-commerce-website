import MainItem from '../main-item/main-item.component';
import { CategoriesContainer } from './main.styles';
import { categories } from '../../constants/constants';

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
