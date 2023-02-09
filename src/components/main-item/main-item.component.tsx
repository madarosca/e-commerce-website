import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainCategory } from '../../store/main-categories/mainCategories.types';
import { MainItemContainer, BackgroundImage, Body } from './main-item.styles';

type MainItemProps = {
	category: MainCategory;
};

const MainItem: FC<MainItemProps> = ({ category }) => {
	const { title, imageUrl, route } = category;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<MainItemContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</MainItemContainer>
	);
};

export default MainItem;
