import MainItem from '../main-item/main-item.component';
import { CategoriesContainer } from './main.styles.jsx';

const Main = ({ categories }) => {
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
