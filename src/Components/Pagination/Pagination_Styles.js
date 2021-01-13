import styled from 'styled-components';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


export const NumbersBarContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 15px;
`;

export const Button = styled.button`
	width: 50px;
	height: 35px;
	color: #fbfbfb;
	background-color: ${(props) => (props.active ? " #525252" : "#323232")};
	border: solid 1px #525252;
	transition: all 2s;
	outline: none;
	text-decoration: none;

	&:hover {
		background-color: #525252;
	}

	&:focus {
		outline: none;
	}

	@media only screen and (max-width: 608px) {
		width: 40px;
		height: 35px;
	}
	@media only screen and (max-width: 518px) {
		width: 35px;
		height: 30px;
	}
	@media only screen and (max-width: 463px) {
		width: 30px;
		height: 25px;
	}
	@media only screen and (max-width: 360px) {
		width: 28px;
		height: 24px;
	}
	@media only screen and (max-width: 340px) {
		width: 25px;
		height: 21px;
		font-size: 13px;
	}
`;

export const NextIcon = styled(AiOutlineArrowRight)`
	padding-left: 10px;
	font-size: 43px;
	cursor: pointer;
	color: #e30713;
	transition: all 1s ease-out;

	&:hover {
		transform: scale(1.25);
	}

	@media only screen and (max-width: 403px) {
		font-size: 33px;
	}
	@media only screen and (max-width: 376px) {
		padding-left: 2px;
		font-size: 30px;
	}
	@media only screen and (max-width: 360px) {
		padding-left: 0px;
		font-size: 27px;
	}
`;

export const PrevIcon = styled(AiOutlineArrowLeft)`
	padding-right: 10px;
	font-size: 43px;
	cursor: pointer;
	color: #e30713;
	transition: all 1s ease-out;

	&:hover {
		transform: scale(1.25);
	}

	@media only screen and (max-width: 403px) {
		font-size: 33px;
	}
	@media only screen and (max-width: 376px) {
		padding-right: 2px;
		font-size: 30px;
	}
	@media only screen and (max-width: 360px) {
		padding-right: 0px;
		font-size: 27px;
	}
`;