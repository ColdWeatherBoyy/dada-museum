import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const artMuseumFont = defineStyle({
	fontFamily: "Playfair Display, serif",
	fontStyle: "italic",
	letterSpacing: "0.1em",
	fontSize: "6xl",
});

const artMuseumFontSmall = defineStyle({
	fontFamily: "Playfair Display, serif",
	fontStyle: "italic",
	letterSpacing: "0.1em",
	fontSize: "2xl",
});

const exhibitHeading = defineStyle({
	fontFamily: "Playfair Display, serif",
});

const sectionHeading = defineStyle({
	fontFamily: "Playfair Display, serif",
	letterSpacing: "0.20em",
	lineHeight: "1.5em",
	textAlign: { base: "center", lg: "left" },
});

const firstD = defineStyle({
	fontFamily: "Oi, sans-serif",
	letterSpacing: ".2em",
	fontSize: "7xl",
});

const firstDSmall = defineStyle({
	fontFamily: "Oi, sans-serif",
	letterSpacing: ".2em",
	fontSize: "4xl",
});

const firstA = defineStyle({
	fontFamily: "Geostar Fill, serif",
	letterSpacing: ".2em",
	fontSize: "7xl",
});

const firstASmall = defineStyle({
	fontFamily: "Geostar Fill, serif",
	letterSpacing: ".2em",
	fontSize: "4xl",
});

const secondD = defineStyle({
	fontFamily: "Goldman, sans-serif",
	letterSpacing: ".2em",
	fontSize: "7xl",
});

const secondDSmall = defineStyle({
	fontFamily: "Goldman, sans-serif",
	letterSpacing: ".2em",
	fontSize: "4xl",
});

const secondA = defineStyle({
	fontFamily: "'Press Start 2P', sans-serif",
	letterSpacing: ".3em",
	fontSize: "7xl",
});

const secondASmall = defineStyle({
	fontFamily: "'Press Start 2P', sans-serif",
	letterSpacing: ".3em",
	fontSize: "4xl",
});

export const headingTheme = defineStyleConfig({
	variants: {
		"art-museum-font": artMuseumFont,
		"art-museum-font-small": artMuseumFontSmall,
		"first-d": firstD,
		"first-d-small": firstDSmall,
		"first-a": firstA,
		"first-a-small": firstASmall,
		"second-d": secondD,
		"second-d-small": secondDSmall,
		"second-a": secondA,
		"second-a-small": secondASmall,
		"section-heading": sectionHeading,
		"exhibit-heading": exhibitHeading,
	},
});
