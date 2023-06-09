import Header from "../sections/Header";
import CurrentExhibits from "../sections/CurrentExhibits";
import Visit from "../sections/Visit";
import Featured from "../sections/Featured";
import Collage from "../sections/Collage";
import SiteMap from "../sections/SiteMap";

// Main component that renders all sections
function App() {
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
