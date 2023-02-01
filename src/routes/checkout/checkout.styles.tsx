import styled from 'styled-components';

export const CheckoutContainer = styled.div`
	width: 70%;
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto;
`;

export const CheckoutHeader = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.span`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 7%;
	}
`;

export const CheckoutEmpty = styled.div`
	font-size: 22px;
	text-align: center;
	display: flex;
	padding: 20px 0;
	min-height: 50vh;
	flex-direction: row;
	align-items: center;
`;

export const Total = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;
