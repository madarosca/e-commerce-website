import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMainCategoriesStart } from '../../store/main-categories/mainCategories.action';
import { Outlet } from 'react-router-dom';
import Main from '../../components/main/main.component';

const Home = () => {
	const dispatch = useDispatch();

	dispatch(fetchMainCategoriesStart());

	return (
		<Fragment>
			<Main />
			<Outlet />
		</Fragment>
	);
};

export default Home;
