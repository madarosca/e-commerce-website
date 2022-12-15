import styled from 'styled-components';
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	cursor: pointer;
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
	right: 9px;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
	width: 24px;
	height: 24px;
`;
