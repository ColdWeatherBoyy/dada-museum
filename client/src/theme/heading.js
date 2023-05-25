import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const artMuseumFont = defineStyle({
	fontFamily: "Playfair Display, serif",
	fontStyle: "italic",
	letterSpacing: "0.1em",
});

const exhibitHeading = defineStyle({
	fontFamily: "Playfair Display, serif",
});

const sectionHeading = defineStyle({
	fontFamily: "Playfair Display, serif",
	letterSpacing: "0.35em",
	lineHeight: "1.5em",
});

const firstD = defineStyle({
	fontFamily: "Oi, sans-serif",
	letterSpacing: ".3em",
});

const firstA = defineStyle({
	fontFamily: "Geostar Fill, serif",
	letterSpacing: ".3em",
});

const secondD = defineStyle({
	fontFamily: "Goldman, sans-serif",
	letterSpacing: ".3em",
});

const secondA = defineStyle({
	fontFamily: "'Press Start 2P', sans-serif",
	letterSpacing: ".3em",
});

export const headingTheme = defineStyleConfig({
	variants: {
		"art-museum-font": artMuseumFont,
		"first-d": firstD,
		"first-a": firstA,
		"second-d": secondD,
		"second-a": secondA,
		"section-heading": sectionHeading,
		"exhibit-heading": exhibitHeading,
	},
});
