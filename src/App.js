function App() {
	// basic request to backend server for testing using async await

	const SERVER_URL = process.env.SERVER_URL || "http://localhost:3001/api";

	async function getServerMessage() {
		const response = await fetch(SERVER_URL, {
			method: "GET",
		});
		const data = await response.json();
		console.log(data);
	}
	getServerMessage();

	return <div>Time for art</div>;
}

export default App;
