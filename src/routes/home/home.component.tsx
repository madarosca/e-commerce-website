import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Main from '../../components/main/main.component';

const Home = () => {
	return (
		<Fragment>
			<Main />
			<Outlet />
		</Fragment>
	);
};

export default Home;
