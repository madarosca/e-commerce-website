import './navigation.styles.scss';

import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as ShopLogo } from '../../assets/logo.svg';

const Navigation = () => {
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
					<Link
						className='auth'
						to='/auth'
					>
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
