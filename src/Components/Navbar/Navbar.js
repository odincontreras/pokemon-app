import React from "react";
import {
	Nav,
	LogoContainer,
	Pokeball,
	Title,
	PokeballContainer,
} from "./Navbar_Styles";
import PokeballImg from "./pokeball.png";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<Nav>
				<NavLink to="/home/1" style={{ textDecoration: "none" }}>
					<LogoContainer >
						<PokeballContainer>
							<Pokeball src={PokeballImg} alt="PokeballImg" />
						</PokeballContainer>

						<Title>Pokemon Seeker</Title>
					</LogoContainer>
				</NavLink>
			</Nav>
		</>
	);
}
export default Navbar;
