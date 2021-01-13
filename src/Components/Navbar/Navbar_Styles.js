import styled, {keyframes} from "styled-components";

export const rotate = keyframes`
	0% {
    transform: rotate(0deg);
  }

	100%{
		transform: rotate(360deg);
	}
`;

export const Nav = styled.nav`
	width: 100%;
	height: 80px;
	background-color: #20232a;
	padding-right: 35px;
	/* padding-left: 35px; */
	display: flex;
	align-items: center;
	border: 0px 0px 2px 0px solid transparent;
	box-shadow: 0px 0px 26px -5px #000000;
	position: sticky;
	top: 0;
	z-index: 100;
	margin: 0;
	padding: 0;

	
`;

export const Pokeball = styled.img`
	height: 75px;
	transition: all 1.5s ease-out;
	animation: ${rotate} 1.5s ease-out;
	z-index: 100;
	background-color: #20232a;
	border-radius: 100px;
`;

export const LogoContainer = styled.div`
	width: auto;

	display: flex;
	align-items: center;

	&:hover ${Pokeball} {
		transform: rotate(360deg);
	}

`;



const leftToRight = keyframes`
	0% {
		transform: translate(-246px, 0px)
	}

	100% {
		transform: translate(0, 0px)
	}
`;

export const PokeballContainer = styled.div`
	z-index: 80;
	/* margin: 35px; */
	padding-left: 15px;
	background-color: #20232a;
`;

export const Title = styled.h1`
	font-size: 2rem;
	padding-left: 4px;
	text-decoration: none;
	color: white;
	animation: ${leftToRight} 1.5s ease-out;
`;
