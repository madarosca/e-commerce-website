import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
	selectMainCategories,
	selectMainCategoriesIsLoading,
} from '../../store/main-categories/mainCategories.selector';
import MainItem from '../main-item/main-item.component';
import Spinner from '../spinner/spinner.component';
import { MainCategoriesContainer } from './main.styles';

const Main = () => {
	const mainCategories = useSelector(selectMainCategories);
	const isLoading = useSelector(selectMainCategoriesIsLoading);

	return (
		<Fragment>
			{isLoading ? (
				<Spinner />
			) : (
				<MainCategoriesContainer>
					{mainCategories.map((category) => (
						<MainItem
							key={category.id}
							category={category}
						/>
					))}
				</MainCategoriesContainer>
			)}
		</Fragment>
	);
};

export default Main;
