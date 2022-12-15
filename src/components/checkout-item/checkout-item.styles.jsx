import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 18px;
	align-items: center;
	justify-content: space-between;
`;

export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export const RemoveButton = styled.div`
	width: 5%;
	cursor: pointer;
`;

export const Arrow = styled.div`
	cursor: pointer;
`;

export const Value = styled.div`
	margin: 0 10px;
`;

export const Name = styled.div`
	width: 23%;
`;

export const Price = styled(Name)``;

export const Quantity = styled(Name)`
	display: flex;
`;
