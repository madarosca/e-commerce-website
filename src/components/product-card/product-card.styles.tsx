import { BsEmojiHeartEyes, BsEmojiHeartEyesFill } from 'react-icons/bs';
import styled, { css } from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const Image = styled.img`
	width: 100%;
	height: 95%;
	object-fit: cover;
	padding-bottom: 5px;
`;

const whishlistIconStyles = css`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 1;
	color: #d01717;
	border-radius: 30px;
	box-shadow: 0px 0px 7px 3px #2d2e2f1a;

	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;

export const WhishlistIconFull = styled(BsEmojiHeartEyesFill)`
	${whishlistIconStyles}
`;

export const WhishlistIconEmpty = styled(BsEmojiHeartEyes)`
	${whishlistIconStyles}
`;

type WhishlistIconProps = {
	isInWishlist?: boolean;
};

export const WhishlistIcon = styled.div<WhishlistIconProps>`
	${({ isInWishlist }) => (isInWishlist ? WhishlistIconFull : WhishlistIconEmpty)}
`;

export const ProductCardContainer = styled.div`
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
