import styled from "styled-components";
import {rotate} from '../Navbar/Navbar_Styles'

export const CardContainer = styled.div`
	width: ${(props) => (props.detailed ? "400px" : "280px")};
	background-color: rgb(82, 82, 82);
	height: ${(props) => (props.detailed ? "auto" : "490px")};
	margin-bottom: 50px;
	color: #fbfbfb;
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	margin-right: 30px;
	margin-left: 30px;
`;

export const PokeballSpinner = styled.img`
	margin: 61% auto;
	height: 150px;
	width: 150px;
	animation: ${rotate} 1.5s ease-out infinite;
`;

export const ImgContainer = styled.div`
	overflow: hidden;
	width: ${(props) => (props.detailed ? "400px" : "280px")};
	height: ${(props) => (props.detailed ? "400px" : "280px")};
`;

export const PokemonImg = styled.img`
	width: ${(props) => (props.detailed ? "400px" : "280px")};
	height: ${(props) => (props.detailed ? "400px" : "280px")};
	transition: transform 1s;
	

	&:hover {
		transform: scale(1.25);
	}
`;

export const InformationContainer = styled.div`
	display: grid;
	width: 100%;
	grid-template: auto auto auto / 50% 50%;
	justify-content: space-around;
	background-color: rgb(50, 50, 50);
	height: ${(props) => (props.detailed ? "auto" : "210px")};
	align-items: center;
	border-radius: 0px 0px 20px 20px;
	font-size: 1.1rem;
	font-family: "Flexo";
`;

export const PokemonName = styled.h5`
	text-align: center;
	background-color: rgb(50, 50, 50);
	padding-top: 10px;
	padding-bottom: 10px;
	font-family: "Potta One";
	grid-column: 1 / 3;
	margin: 0;
`;

export const InfName = styled.p`
	grid-column: 1 / 1;
	justify-items: space-around;
	margin-left: 35px;
`;

export const InfContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	grid-column: 2 / 2;
`;

export const InfContent = styled.p`
	grid-column: 2 / 2;
	display: flex;
	flex-wrap: wrap;
	width: ${(props) => (props.detailed ? "150px" : "auto")};
	margin-right: 10px;
`;

export const TypeInf = styled.p`
	grid-column: 2 / 2;
	background: ${(props) => props.backgroundColor};
	border-radius: 5px;
	padding: 0px 10px;
	margin-right: 10px;
	:first-child {
		margin-right: 15px;
	}
`;
