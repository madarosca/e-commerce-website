import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
	width: 100%;
	display: block;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`;
