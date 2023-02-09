import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import WhishlistItem from '../../components/whishlist-item/whishlist-item.component';
import { selectWhishlistItems, selectWhishlistCount } from '../../store/whishlist/whishlist.selector';
import { WhishlistContainer, WhishlistItemContainer, WhishlistEmpty, Title } from './whishlist.styles';

const Whishlist = () => {
	const whishlistItems = useSelector(selectWhishlistItems);
	const totalWhishlistItems = useSelector(selectWhishlistCount);

	return (
		<WhishlistContainer>
			{!whishlistItems.length ? (
				<WhishlistEmpty>Your whishlist is empty!</WhishlistEmpty>
			) : (
				<Fragment>
					<h2>
						<Title>Favourite products ({totalWhishlistItems})</Title>
					</h2>
					<WhishlistItemContainer>
						{whishlistItems.map((whishlistItem) => (
							<WhishlistItem
								key={whishlistItem.id}
								whishlistItem={whishlistItem}
							/>
						))}
					</WhishlistItemContainer>
				</Fragment>
			)}
		</WhishlistContainer>
	);
};

export default Whishlist;
