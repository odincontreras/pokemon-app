import React from "react";
import {
	CardContainer,
	PokemonName,
	PokemonImg,
	InformationContainer,
	TypeInf,
	InfContainer,
	InfContent,
	InfName,
	ImgContainer,
	PokeballSpinner,
	TypeContainer,
	TextContainer,
} from "./Card_Styles";
import { NavLink } from "react-router-dom";
import pokeballImg from "../Navbar/pokeball.png";

function Card({ loading, pokemon, detailed, pokemonSpecie, evolChain }) {
	const backgroundColor = (pokemonType) => {
		switch (pokemonType) {
			case "water":
				return "#1467d3";
			case "fire":
				return "#af2121";
			case "grass":
				return "#028802";
			case "poison":
				return "#800080";
			case "bug":
				return "linear-gradient(45deg, rgba(22,176,16,1) 0%, rgba(236,192,12,1) 100%)";
			case "flying":
				return "linear-gradient(45deg, rgba(110,110,110,1) 22%, rgba(0,5,247,1) 100%)";
			case "ground":
				return "#923f26";
			case "electric":
				return "linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 33%, rgba(255,186,11,1) 100%)";
			case "fairy":
				return "#ca7381";
			case "fighting":
				return "linear-gradient(45deg, rgba(131,131,131,1) 0%, rgba(153,144,106,1) 19%, rgba(152,80,4,1) 100%)";
			case "psychic":
				return "linear-gradient(45deg, rgba(111,111,111,1) 22%, rgba(255,73,251,1) 100%)";
			case "steel":
				return "#949494";
			case "ice":
				return "linear-gradient(45deg, rgba(84,84,84,1) 0%, rgba(0,172,247,1) 100%);";
			case "rock":
				return "#012c01";
			case "ghost":
				return "linear-gradient(45deg, rgba(0,0,0,1) 22%, rgba(182,0,247,1) 100%)";
			case "dragon":
				return "linear-gradient(45deg, rgba(255,106,0,1) 15%, rgba(7,113,1,1) 100%)";
			case "dark":
				return "linear-gradient(45deg, rgba(0,0,0,1) 15%, rgba(102,102,102,1) 100%)";
			default:
				return "#525252";
		}
	};

	return (
		<CardContainer detailed={detailed}>
			{loading ? (
				<PokeballSpinner src={pokeballImg} />
			) : (
				<>
					<NavLink to={`/detailed/${pokemon.data.name}`}>
						<ImgContainer
							detailed={detailed}
							onClick={() => (document.documentElement.scrollTop = 0)}
						>
							<PokemonImg
								detailed={detailed}
								src={pokemon.data.sprites.front_default}
								alt="Pokemon Image"
							/>
						</ImgContainer>
					</NavLink>

					<InformationContainer detailed={detailed}>
						<PokemonName>
							{pokemon.data.name
								.replace(/\b\w/g, (c) => c.replace(/ /g, " ").toUpperCase())
								.replace(/-/g, " ")}
						</PokemonName>

						<InfContainer gridRow="2/2">
							<InfName>Type:</InfName>
							<TypeContainer>
								{pokemon.data.types.map((item) => {
									return (
										<TypeInf
											key={item.type.name}
											backgroundColor={backgroundColor(item.type.name)}
										>
											{item.type.name.replace(/\b\w/g, (c) => c.toUpperCase())}
										</TypeInf>
									);
								})}
							</TypeContainer>
						</InfContainer>

						<InfContainer gridRow="3/3">
							<InfName>Ability:</InfName>
							{pokemon.data.abilities.map((item) => {
								return (
									<TextContainer key={item.ability.name}>
										<InfContent detailed={detailed}>
											{item.ability.name
												.replace(/\b\w/g, (c) => c.toUpperCase())
												.replace(/-/g, " ")}
										</InfContent>
									</TextContainer>
								);
							})}
						</InfContainer>

						{detailed && (
							<>
								{/* Habitat Data */}
								{pokemonSpecie.data.habitat === null ? (
									<div></div>
								) : (
									<>
										<InfContainer gridRow="4/4">
											<InfName>Habitat:</InfName>
											<TextContainer>
												<InfContent detailed={detailed}>
													{pokemonSpecie.data.habitat.name.replace(
														/\b\w/g,
														(c) => c.toUpperCase()
													)}
												</InfContent>
											</TextContainer>
										</InfContainer>
									</>
								)}

								{/* Generation Data */}
								<InfContainer gridRow="5/5">
									<InfName>Generation:</InfName>
									<TextContainer>
										<InfContent detailed={detailed}>
											{pokemonSpecie.data.generation.name.replace(
												/\b\w/g,
												(c) => c.toUpperCase()
											)}
										</InfContent>
									</TextContainer>
								</InfContainer>

								{/* Growth Rate Data */}
								<InfContainer gridRow="6/6">
									<InfName>Growth Rate:</InfName>
									<TextContainer>
										<InfContent detailed={detailed}>
											{pokemonSpecie.data.growth_rate.name.replace(
												/\b\w/g,
												(c) => c.toUpperCase()
											)}
										</InfContent>
									</TextContainer>
								</InfContainer>

								{/* Held Items Data */}
								{pokemon.data.held_items.length > 0 && (
									<InfContainer>
										<InfName>Held Items Stats:</InfName>
										<TextContainer>
											{pokemon.data.held_items.map((item) => {
												return (
													<InfContent key={item.item.name} detailed={detailed}>
														{item.item.name.replace(/\b\w/g, (c) =>
															c.toUpperCase()
														)}
													</InfContent>
												);
											})}
										</TextContainer>
									</InfContainer>
								)}

								{/* Stats Data */}
								<InfContainer>
									<InfName>Base Stats:</InfName>
									<TextContainer>
										{pokemon.data.stats.map((item) => {
											return (
												<InfContent detailed={detailed} key={item.stat.name}>
													{`${item.stat.name.replace(/\b\w/g, (c) =>
														c.toUpperCase()
													)} / ${item.base_stat} `}
												</InfContent>
											);
										})}
									</TextContainer>
								</InfContainer>

								{/* Evolution Data */}
								<InfContainer>
									<InfName>Evolution Chain:</InfName>
									<TextContainer>
										{evolChain.data.chain.evolves_to.length === 0 ? (
											<p>This pokemon doesn't have evolutions</p>
										) : (
											<InfContent detailed={detailed}>
												{`${evolChain.data.chain.species.name.replace(
													/\b\w/g,
													(c) => c.toUpperCase()
												)} > ${evolChain.data.chain.evolves_to[0].species.name.replace(
													/\b\w/g,
													(c) => c.toUpperCase()
												)}`}
												{evolChain.data.chain.evolves_to[0].evolves_to.length >
													0 &&
													` > ${evolChain.data.chain.evolves_to[0].evolves_to[0].species.name.replace(
														/\b\w/g,
														(c) => c.toUpperCase()
													)}`}
											</InfContent>
										)}
									</TextContainer>
								</InfContainer>
							</>
						)}
					</InformationContainer>
				</>
			)}
		</CardContainer>
	);
}

export default Card;
