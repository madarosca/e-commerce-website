import { Fragment, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as ShopLogo } from '../../assets/logo.svg';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { selectWhishlistCount } from '../../store/whishlist/whishlist.selector';

const Navigation = memo(() => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
	const totalWhishlistItems = useSelector(selectWhishlistCount);

	const onSignOutClick = () => dispatch(signOutStart());

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<ShopLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop' className='pe-3'>SHOP</NavLink>
					<NavLink to='/whishlist'>
						WISHLIST{' '}
						<span className='badge bg-secondary ms-2 rounded-pill translate-middle'>
							{totalWhishlistItems}
						</span>
					</NavLink>
					{!!currentUser ? (
						<NavLink
							to='/'
							onClick={onSignOutClick}
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
});

export default Navigation;
