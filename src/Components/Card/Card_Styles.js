import styled from "styled-components";
import { rotate } from "../Navbar/Navbar_Styles";

export const CardContainer = styled.div`
	width: ${(props) => (props.detailed ? "400px" : "280px")};
	background-color: rgb(82, 82, 82);
	height: ${(props) => (props.detailed ? "auto" : "560px")};
	margin-bottom: 50px;
	color: #fbfbfb;
	border-radius: 20px;
	overflow: hidden;
	display: grid;
	grid-template-columns: minmax(0, 100%);
	grid-template-rows: ${(props) =>
		props.detailed ? "auto" : "minmax(0, 50%) minmax(0, 50%)"};
	margin-right: 30px;
	margin-left: 30px;
	@media only screen and (max-width: 510px) {
		width: 250px;
	}
	@media only screen and (max-width: 399px) {
		width: 225px;
	}
	@media only screen and (max-width: 345px) {
		width: 200px;
	}
`;

export const PokeballSpinner = styled.img`
	margin: 61% auto;
	height: 150px;
	width: 150px;
	animation: ${rotate} 1.5s ease-out infinite;
`;

export const ImgContainer = styled.div`
	grid-column: 1 / 1;
	grid-row: 1 / 1;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

export const PokemonImg = styled.img`
	width: 90%;
	transition: transform 1s;

	&:hover {
		transform: scale(1.25);
	}
`;

export const InformationContainer = styled.div`
	grid-column: 1 / 1;
	grid-row: 2 / 2;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: min-content;
	grid-auto-rows: min-content;
	grid-template-columns: 100%;
	background-color: rgb(50, 50, 50);
	border-radius: 0px 0px 20px 20px;
	font-size: 1.1rem;
	font-family: "Flexo";
	padding-bottom: ${(props) => (props.detailed ? "10px" : "0")};
`;

export const PokemonName = styled.h5`
	text-align: center;
	background-color: rgb(50, 50, 50);
	font-family: "Potta One";
	grid-column: 1 / 1;
	grid-row: 1 / 1;
	align-self: center;
	padding: 10px 0;
`;

export const InfName = styled.p`
	grid-column: 1 / 1;
	justify-self: center;
`;

export const InfContainer = styled.div`
	grid-column: 1 / 1;
	grid-row: ${({ gridRow }) => gridRow};
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: minmax(0, 50%) minmax(0, 50%);
	margin-bottom: 10px;
`;

export const InfContent = styled.p``;

export const TypeInf = styled.p`
	background: ${(props) => props.backgroundColor};
	border-radius: 5px;
	height: 30px;
	width: 65px;
	text-align: center;
`;

export const TypeContainer = styled.div`
	grid-column: 2 / 2;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-right: 15px;
`;

export const TextContainer = styled.div`
	grid-column: 2 / 2;
	height: 100%;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
`;
