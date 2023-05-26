import { useState, useEffect } from "react";
import Header from "../sections/Header";
import CurrentExhibits from "../sections/CurrentExhibits";
import Visit from "../sections/Visit";
import Featured from "../sections/Featured";
import Collage from "../sections/Collage";
import SiteMap from "../sections/SiteMap";

function App() {
	console.log("App rendered");

	async function getAicTestResponse() {
		const response = await fetch("/api/aic/", {
			method: "GET",
		});
		const data = await response.json();
		console.log(data);
	}

	async function getMetTestResponse() {
		const response = await fetch("/api/met/", {
			method: "GET",
		});
		const data = await response.json();
		console.log(data);
	}

	// useEffect(() => {
	// 	getMetTestResponse();
	// }, []);

	// useEffect(() => {
	// 	getAicTestResponse();
	// }, []);

	return (
		<>
			<Header />
			<CurrentExhibits />
			<Visit />
			<Featured />
			<Collage />
			<SiteMap />
		</>
	);
}

export default App;
