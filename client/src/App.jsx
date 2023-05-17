import { useState, useEffect } from "react";

function App() {
	async function getServerMessage() {
		const response = await fetch("/api/aic/", {
			method: "GET",
		});
		const data = await response.json();
		console.log(data);
	}

	useEffect(() => {
		getServerMessage();
	}, []);

	return (
		<>
			<div>Hello</div>
		</>
	);
}

export default App;
