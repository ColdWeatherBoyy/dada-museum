import { useState, useEffect } from "react";
import Header from "../sections/Header";
import CurrentExhibits from "../sections/CurrentExhibits";
import Visit from "../sections/Visit";
import Featured from "../sections/Featured";
import Collage from "../sections/Collage";
import SiteMap from "../sections/SiteMap";

function LinkDestination() {
	console.log("App rendered");

	return (
		<>
			<Header />
			<SiteMap />
		</>
	);
}

export default LinkDestination;
