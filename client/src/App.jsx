import { useState, useEffect } from "react";
import Header from "./Header";
import CurrentExhibits from "./CurrentExhibits";
import Visit from "./Visit";
import Featured from "./Featured";
import Collage from "./Collage";
import SiteMap from "./SiteMap";

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
