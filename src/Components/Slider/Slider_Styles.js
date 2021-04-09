import styled from 'styled-components';

export const SliderContainer = styled.div`
	height: 300px;
	background-color: #20232a;
`;

export const PokemonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: url(${({ background }) => background});
	background-size: 100% 100%;
	height: 300px;
	width: 800px;
	border-radius: 10px;
	margin: 0 auto;

	@media only screen and (max-width: 992px) and (min-width: 886px) {
		width: 700px;
	}
	@media only screen and (max-width: 885px) and (min-width: 754px) {
		width: 600px;
	}
	@media only screen and (max-width: 753px) and (min-width: 624px) {
		width: 500px;
	}
	@media only screen and (max-width: 623px) and (min-width: 516px) {
		width: 400px;
	}
	@media only screen and (max-width: 515px) {
		width: 300px;
	}
	@media only screen and (max-width: 383px) {
		width: 270px;
	}
	@media only screen and (max-width: 346px) {
		width: 230px;
	}
`;

export const Pokemon = styled.img`
	width: 250px;
	margin: 0 auto;
	@media only screen and (max-width: 346px) {
		width: 220px;
	}
`;