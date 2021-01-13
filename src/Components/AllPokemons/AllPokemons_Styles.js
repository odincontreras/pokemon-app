import styled from 'styled-components';

export const ContainerCards = styled.div`
	width: 100%;
	height: ${({fetchData}) => fetchData ? "auto" : "100vh"};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #20232a;
	flex-wrap: wrap;
	padding-left: 70px;
	padding-right: 70px;
`;

