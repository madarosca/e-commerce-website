import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px 0;
	border: 1px solid black;
	background-color: white;
	top: 96px;
	right: 40px;
	z-index: 5;
`;

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	margin-bottom: 5px;
	padding: 0 20px;
`;

export const CartEmpty = styled.div`
	text-align: center;
	display: flex;
	padding: 20px 0;
	height: 100%;
	font-size: 20px;
	flex-direction: row;
	align-items: center;
`;
