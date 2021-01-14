import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SliderContainer, Pokemon, PokemonContainer } from "./Slider_Styles";
import PikachuImg from "./Pokemons-Imgs/Pikachu.png";
import SquirtleImg from "./Pokemons-Imgs/Squirtle.png";
import CharmanderImg from "./Pokemons-Imgs/Charmander.png";
import BulbasaurImg from "./Pokemons-Imgs/Bulbasaur.png";
import beach from "./Backgrounds-Slider/beach-4.jpg";
import forest from "./Backgrounds-Slider/forest-5.jpg";
import volcano from "./Backgrounds-Slider/volcano-1.jpg";
import storm from "./Backgrounds-Slider/storm-2.jpg";

function Slider() {
	const background = {
		bulbasaur: forest,
		squirtle: beach,
		charmander: volcano,
		pikachu: storm,
	};

	return (
		<SliderContainer>
			<Carousel /* nextIcon={<GrLinkNext/>} */>
				<Carousel.Item interval={2000}>
					<PokemonContainer background={background.pikachu}>
						<Pokemon src={PikachuImg} alt="First slide" />
					</PokemonContainer>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<PokemonContainer background={background.charmander}>
						<Pokemon src={CharmanderImg} alt="First slide" />
					</PokemonContainer>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<PokemonContainer background={background.squirtle}>
						<Pokemon src={SquirtleImg} alt="First slide" />
					</PokemonContainer>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<PokemonContainer background={background.bulbasaur}>
						<Pokemon src={BulbasaurImg} alt="First slide" />
					</PokemonContainer>
				</Carousel.Item>
			</Carousel>
		</SliderContainer>
	);
}

export default Slider;
