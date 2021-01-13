import React, { useState, useEffect } from "react";
import {
	ContainerCards
} from "./AllPokemons_Styles";
import axios from "axios";
import Card from "../Card/Card";

function AllPokemons({initVal, limit, emptyObj}) {
	const [created, setCreated] = useState(false);
	const [fetchData, setFetchData] = useState(false);
	const [pokemonObj, setPokemonObj] = useState([]);
	const [toggle, setToggle] = useState(false);

	//Crea el default objeto que almacenara la api a consultar de cada pokemon por separado, ademas de la respuesta json y el loading.
	const createPokemonObj = (init, lim) => {
		for (let index = init; index <= lim; index++) {
			setPokemonObj((prev) => [
				...prev,
				{
					api: `https://pokeapi.co/api/v2/pokemon/${index}/`,
					json: null,
					loading: true,
					id: index,
				},
			]);
		}
		setCreated(true);
	};

	//Fetch la data de cada pokemon.
	const getPokemon = () => {
		const updateValueInObj = (res, index) => {
			let newArr = [...pokemonObj];
			newArr[index].json = res;
			newArr[index].loading = false;
			setPokemonObj(newArr);
		};

		pokemonObj.map((item) => {
			axios
				.get(item.api)
				.then((res) => {
					updateValueInObj(res, pokemonObj.indexOf(item));
					setFetchData(true);
				})

				.catch((error) => {
					console.log(error.request.status);
				});
		});
	};

	//Actualiza el objeto segun el indice que se este usando del pagination
	useEffect(() => {
		createPokemonObj(initVal, limit);
		/* console.log(toggle);
		console.log(pokemonObj); */
		if (created === true) {
			getPokemon();
			setToggle(false);
		}
	}, [created, fetchData]);

	//Set the object to empty 
	useEffect(() => {
		if(toggle === true) {
			setPokemonObj([]);
			setCreated(false);
		}
	}, [toggle])

	//Set toggle to true, toggle se encarga de recibir emptyObj prop que sirve como switch para obtener nueva data de otros pokemones segun el indice que seleccione el usuario en el componente pagination 
	useEffect(() => {
		setToggle(true)
	}, [emptyObj])

	return (
		<>
			<ContainerCards fetchData={fetchData}>
				{fetchData === true &&
					created === true &&
					pokemonObj.map((pokemon) => {
						return (
							<div key={pokemonObj.indexOf(pokemon)}>
								<Card
									pokemon={pokemon.json}
									loading={pokemon.loading}
									detailed={false}
								/>
							</div>
						);
					})}
			</ContainerCards>
		</>
	);
}

export default AllPokemons;
