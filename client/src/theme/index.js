import { extendTheme } from "@chakra-ui/react";
import { headingTheme } from "./heading";

const theme = extendTheme({
	components: { Heading: headingTheme },
	textStyles: {
		dropdownFirstD: {
			fontFamily: "Oi, sans-serif",
			fontSize: ["24px", "36px"],
		},
		dropdownFirstA: {
			fontFamily: "Geostar Fill, serif",
			fontSize: ["24px", "36px"],
		},
		dropdownSecondD: {
			fontFamily: "Goldman, sans-serif",
			fontSize: ["24px", "36px"],
		},
		dropdownSecondA: {
			fontFamily: "'Press Start 2P', sans-serif",
			fontSize: ["24px", "36px"],
		},
	},
});

export default theme;
