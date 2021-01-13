import React, { useState, useEffect } from "react";
import {
	NumbersBarContainer,
	Button,
	NextIcon,
	PrevIcon,
} from "./Pagination_Styles";
import {
	Route,
	Link,
	useHistory
} from "react-router-dom";
import AllPokemons from "../AllPokemons/AllPokemons";

function Pagination() {
	const history = useHistory();
	const index = history.location.pathname;
	let [initVal, setInitVal] = useState();
	let [limit, setLimit] = useState();
	const [paginationNumbs, setPaginationNumbs] = useState([]);
	const [createdPaginationNumbs, setCreatedPaginationNumbs] = useState(false);
	const [currentNumb, setCurrentNumb] = useState(1);
	const [sliceNumbs, setSliceNumbs] = useState([]);
	const [initSlice, setInitSlice] = useState(0);
	const [endSlice, setEndSlice] = useState(10);
	const [emptyObj, setEmptyObj] = useState(false);

	//Crea todos los numeros que renderizara el pagination
	useEffect(() => {
		for (let index = 1; index <= 45; index++) {
			const arr = paginationNumbs;
			arr.push(index);
		}
		setCreatedPaginationNumbs(true);
		// console.log(paginationNumbs);
	}, []);

	//Corta en 10 en 10 los numeros que se van a renderizar en el pagination segun sea el indice
	useEffect(() => {
		setSliceNumbs(paginationNumbs.slice(initSlice, endSlice));
		// console.log(sliceNumbs);
	}, [initSlice, endSlice, createdPaginationNumbs]);

	useEffect(() => {
		handleIndexChange(index.slice(6, index.length));
		// console.log(index.slice(6, index.length));
	}, [index]);

	const handlePrevIcon = () => {
		if(currentNumb === 1 ) {
			return currentNumb;
		} else {
			return currentNumb - 1;
		}
	};

	const handleNextIcon = () => {
		if (currentNumb === 45) {
			return currentNumb;
		} else {
			return currentNumb + 1;
		}
	};

	const handleIndexChange = (path) => {
		const buttonNumber = parseFloat(path);
		// console.log(buttonNumber);
		let endPoint;
		const innerNumber = parseFloat(path + "0");
		if (buttonNumber === 45) {
			endPoint = innerNumber * 2 - 2;
		} else {
			endPoint = innerNumber * 2;
		}
		setInitVal(endPoint - 19);
		setLimit(endPoint);
		setEmptyObj(!emptyObj);
		setCurrentNumb(buttonNumber);
		document.documentElement.scrollTop = 0;
		const indexArray = sliceNumbs.indexOf(buttonNumber);
		// console.log(indexArray);
		if (indexArray >= 7) {
			if (buttonNumber >= 35) {
				setInitSlice(35);
				setEndSlice(45);
			} else {
				setInitSlice(buttonNumber - 1);
				setEndSlice(buttonNumber - 1 + 10);
			}
		} else if (indexArray === 0) {
			if (buttonNumber <= 9) {
				setInitSlice(0);
				setEndSlice(10);
			} else {
				setInitSlice(buttonNumber - 10);
				setEndSlice(buttonNumber);
			}
		} else if (indexArray === -1) {
			setInitSlice(buttonNumber - 1);
			setEndSlice(buttonNumber + 9);
		}
	};

	const handleBackgroundColor = (buttonNumb) => {
		const currentNumb = parseFloat(index.slice(6, index.length));
		
		if(buttonNumb === currentNumb) {
			return true;
		}
	}

	return (
		<>
			<Route
				path="/:id"
				render={() => (
					<AllPokemons initVal={initVal} limit={limit} emptyObj={emptyObj} />
				)}
			/>

			<NumbersBarContainer>
				<Link to={`/home/${handlePrevIcon()}`}>
					<PrevIcon/>
				</Link>
				{sliceNumbs.map((item) => {
					return (
						<Link key={item} to={`/home/${item}`}>
							<Button active={handleBackgroundColor(item)}>{item}</Button>
						</Link>
					);
				})}
				<Link to={`/home/${handleNextIcon()}`}>
					<NextIcon/>
				</Link>
			</NumbersBarContainer>
		</>
	);
}

export default Pagination;
