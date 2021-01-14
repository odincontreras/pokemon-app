import React, { useState } from "react";
import { TitleBar, Form, InputBar, SearchBarContainer, SendButton } from "./SearchBar_Styles";
import { NavLink, Route, useHistory } from "react-router-dom";
import DetailedPokemon from "../DetailedPokemon/DetailedPokemon";

function SearchBar() {
	const [value, setValue] = useState("");
	const [pokemon, setPokemon] = useState("");
	const history = useHistory();

	const handleChange = (event) => {
		setValue(event.target.value);
		event.preventDefault();
	};

	const handleClick = () => {
		setPokemon(value.toLowerCase().replace(/[^a-zA-Z ]/g, ""));
		setValue("");
	};

	const onKeyPressFunctions = (target) => {
		if(target.charCode === 13) {
			target.preventDefault();
			handleClick();
			history.push('/detailed')
		} 
	}

	return (
		<SearchBarContainer>
			<TitleBar>Search a Pokemon</TitleBar>
			<Form>
				<InputBar
					type="text"
					value={value}
					onChange={handleChange}
					onKeyPress={onKeyPressFunctions}
				/>
				<NavLink exact to={`/detailed`}>
					<SendButton onClick={handleClick}>Send</SendButton>
					{/* <SendIcon onClick={handleClick} /> */}
				</NavLink>
			</Form>
			<Route
				exact
				path="/detailed"
				render={() => <DetailedPokemon pokemon={pokemon} />}
			/>
		</SearchBarContainer>
	);
}

export default SearchBar;
