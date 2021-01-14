import React, {useEffect, useState} from "react";
import {AppContainer, TopButton, ArrowUp} from './App_Styles';
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import DetailedPokemon from "../DetailedPokemon/DetailedPokemon";
import Pagination from "../Pagination/Pagination";

function App() {
	const [showUp, setShowUp] = useState(false)

	const scrollInf = () => {
		if(window.scrollY > 1300) {
			setShowUp(true);
		} else {
			setShowUp(false);
		}
		// console.log(document.documentElement.scrollTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollInf)
	}, [])

	

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<AppContainer>
			<Router>
				<Navbar onScroll={scrollInf} />
				<Slider />
				<SearchBar />
				<Switch>
					<Route exact path="/home/:id" render={() => <Pagination />} />
					<Route
						path="/detailed/:name"
						exact
						render={() => <DetailedPokemon />}
					/>
					<Redirect exact from="/" to="/home/1" />
					<Redirect exact from="/home/:id" to="/home/1" />
					<Redirect exact from="/detailed/:name" to="/home/1" />
				</Switch>
			</Router>
			<TopButton onClick={scrollToTop} showUp={showUp}>
				<ArrowUp />
			</TopButton>
		</AppContainer>
	);
}

export default App;
