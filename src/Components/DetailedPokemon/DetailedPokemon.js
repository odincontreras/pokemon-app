import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardContainer } from "./DetailedPokemon_Styles";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";

function DetailedPokemon({ pokemon }) {
	const [loading, setLoading] = useState(true);
	const [generalData, setGeneralData] = useState(null);
  const [speciesData, setSpeciesData] = useState(null);
  const [evolChain, setEvolChain] = useState(null);
  const {name} = useParams();

	useEffect(() => {
		getDetailedPokemon();
		/* console.log(generalData);
		console.log(name)
		console.log(pokemon) */
	}, [loading, name, pokemon]);

	useEffect(() => {
		setLoading(true);
	}, [name, pokemon])

	const getDetailedPokemon = () => {
		let generalApi;
		let speciesApi;

		if(name) {
			generalApi = `https://pokeapi.co/api/v2/pokemon/${name}/`;
			speciesApi = 
			`https://pokeapi.co/api/v2/pokemon-species/${name}`;
		} else {
			generalApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
			speciesApi = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
		}

		const getGeneral = axios.get(generalApi);
		const getSpecies = axios.get(speciesApi);

		axios
			.all([getGeneral, getSpecies])
			.then(
				axios.spread((...allData) => {
					setGeneralData(allData[0]);
					setSpeciesData(allData[1]);
          /* console.log(generalData);
          console.log(speciesData) */
          
          
          axios.get(allData[1].data.evolution_chain.url)
            .then((res) => {
              setEvolChain(res)
              setLoading(false);
              // console.log(evolChain);
            })
				})
			)
			.catch((error) => {
				if (error.request.status === 404) {
					alert("That pokemon doesn't exist, please rewrite it");
				} else {
					alert("There is a problem conexion, please reload");
				}
				// console.log(error);
			});
	};

	return (
		<CardContainer>
			<Card
				loading={loading}
				pokemon={generalData}
        pokemonSpecie={speciesData}
        evolChain={evolChain}
				detailed={true}
			/>
		</CardContainer>
	);
}

export default DetailedPokemon;
