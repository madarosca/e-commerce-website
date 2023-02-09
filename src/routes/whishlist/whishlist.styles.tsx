import styled from 'styled-components';

export const WhishlistContainer = styled.div`
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto;
`;

export const WhishlistItemContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
`;

export const WhishlistEmpty = styled.div`
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

export const Title = styled.div`
	font-size: 28px;
	margin-bottom: 25px;
`;
