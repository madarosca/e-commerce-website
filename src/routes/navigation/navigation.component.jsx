import { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as ShopLogo } from '../../assets/logo.svg';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<ShopLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>
					{!!currentUser ? (
						<NavLink
							to='/'
							onClick={signOutUser}
						>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{!!isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
