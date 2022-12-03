import './navigation.styles.scss';

import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as ShopLogo } from '../../assets/logo.svg';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

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
							onClick={signOutUser}
						>
							SIGN OUT
						</Link>
					) : (
						<Link
							className='auth'
							to='/auth'
						>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				<CartDropdown />
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
