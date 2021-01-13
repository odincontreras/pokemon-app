import styled from 'styled-components';
import { AiOutlineSend } from "react-icons/ai";

export const SearchBarContainer = styled.div`
	width: 100%;
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: auto;
	padding-bottom: 40px;
`;

export const InputBar = styled.input`
	border: 1px solid #e30713;
	width: 60%;
	outline: none;
	background-color: #323232;
	border-radius: 5px 0px 0px 5px;
	color: white;
	height: 36px;
	padding-left: 8px;
`;

export const SendIcon = styled(AiOutlineSend)`
	color: #e30713;
	cursor: pointer;
	font-size: 47px;
	padding-left: 6px;
`;

export const TitleBar = styled.h3`
	text-align: center;
	margin-top: 20px;
	color: #fbfbfb;
	margin-bottom: 20px;
`;

export const SendButton = styled.button`
	height: 36px;
	border: 1px solid #e30713;
	padding: 0px 10px;
	color: #fbfbfb;
	background-color: #525252;
	border-radius: 0px 5px 5px 0px;
	transition: all 1s ease-out;
	font-size: 1.2rem;


	&:hover {
		background-color: #af2121;
		font-size: 1.4rem;
	}

	&:focus {
		outline: none;
	}
`;