import { useState, useEffect } from "react";

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

	useEffect(() => {
		getMetTestResponse();
	}, []);

	useEffect(() => {
		getAicTestResponse();
	}, []);

	return (
		<>
			<div>Hello</div>
		</>
	);
}

export default App;
