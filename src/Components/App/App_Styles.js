import styled, { css } from "styled-components";
import { FaArrowUp } from "react-icons/fa";

export const AppContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: #20232a;
`;

export const ArrowUp = styled(FaArrowUp)`
	color: #f5f2f5;
	font-size: 30px;
	transition: all 1s ease-out;

	@media only screen and (max-width: 450px) {
		font-size: 25px;
	}
`;

export const TopButton = styled.button`
	${({ showUp }) =>
		showUp
			? css`
					opacity: 1;
					visibility: visible;
			  `
			: css`
					opacity: 0;
					visibility: hidden;
			  `};
	position: fixed;
	bottom: 30px;
	right: 30px;
	background-color: #323232;
	width: 55px;
	height: 55px;
	border-radius: 5px;
	border: 2px solid #525252;
	transition: all 1s ease-out;

	&:hover {
		border: 2px solid #af2121;
	}
	&:hover ${ArrowUp} {
		font-size: 35px;
	}
	&:focus {
		outline: none;
	}

	@media only screen and (max-width: 1500px) and (min-width: 1329px) {
		bottom: 60px;
		right: 60px;
		width: 65px;
		height: 65px;
	}
	@media only screen and (max-width: 1328px) and (max-width: 1160px) {
		bottom: 30px;
		right: 30px;
		width: 55px;
		height: 55px;
	}
	@media only screen and (max-width: 1159px) and (min-width: 1026px) {
		bottom: 60px;
		right: 60px;
		width: 65px;
		height: 65px;
	}
	@media only screen and (max-width: 1025px) and (min-width: 819px) {
		bottom: 120px;
		right: 30px;
	}
	@media only screen and (max-width: 819px) and (min-width: 625px) {
		bottom: 100px;
		right: 60px;
	}
	@media only screen and (max-width: 624px) {
		bottom: 100px;
		right: 40px;
	}
	@media only screen and (max-width: 550px) {
		bottom: 100px;
		right: 20px;
	}
	@media only screen and (max-width: 485px) {
		width: 50px;
		height: 50px;
	}
	@media only screen and (max-width: 450px) {
		width: 40px;
		height: 40px;
	}
	@media only screen and (max-width: 437px) {
		right: 10px;
	}
	@media only screen and (max-width: 400px) {
		display: none;
	}
`;
