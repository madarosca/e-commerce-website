import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';
import { BsFillTrashFill } from 'react-icons/bs';

export const Image = styled.img`
	width: 100%;
	height: 95%;
	object-fit: cover;
	padding-bottom: 5px;
`;

export const WhishlistItemContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	${BaseButton},
	${GoogleSignInButton},
    ${InvertedButton} {
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;
	}

	&:hover {
		${Image} {
			opacity: 0.8;
		}

		${BaseButton},
		${GoogleSignInButton},
        ${InvertedButton} {
			opacity: 0.85;
			display: flex;
		}
	}
`;

export const Footer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const DeleteButton = styled(BsFillTrashFill)`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 1;
	color: #ff2b2b;

	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;
