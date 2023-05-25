import { extendTheme } from "@chakra-ui/react";
import { headingTheme } from "./heading";

const theme = extendTheme({
	breakpoints: {
		sm: "30em", // 480px
		md: "48em", // 768px
		lg: "62em", // 992px
		lgm: "67.5em", // 1080px
		xl: "80em", // 1280px
		"2xl": "96em", // 1536px
	},
	components: { Heading: headingTheme },
	textStyles: {
		playfairBold: {
			fontFamily: "Playfair Display, serif",
			fontWeight: "bold",
		},
		battambang: {
			fontFamily: "Battambang, serif",
		},
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
