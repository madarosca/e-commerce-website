import { Outlet } from 'react-router-dom';
import Main from '../../components/main/main.component';

const Home = () => {
	return (
		<div>
			<Main />
			<Outlet />
		</div>
	);
};

export default Home;
