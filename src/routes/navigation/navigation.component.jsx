import './navigation.styles.scss';

import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { ReactComponent as ShopLogo } from '../../assets/logo.svg';

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const handleSignOut = () => {
		setCurrentUser(null);
	};

	return (
		<Fragment>
			<div className='navigation'>
				<Link
					className='logo-container'
					to='/'
				>
					<ShopLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link
						className='nav-link'
						to='/shop'
					>
						SHOP
					</Link>
					{!!currentUser ? (
						<Link
							className='auth'
							to='/'
							onClick={handleSignOut}
						>
							SIGN OUT
						</Link>
					) : (
						<Link
							className='auth'
							to='/auth'
						>SIGN IN</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
