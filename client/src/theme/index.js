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
	colors: {
		brand: {
			brown: "#53443D",
			gray: "#B1BAC1",
			300: "#CBD5E0",
		},
	},
	components: {
		Heading: headingTheme,
		Radio: {
			variants: {
				primary: ({ colorScheme = "brand" }) => ({
					color: `${colorScheme}.brown`,
					control: {
						border: "1px solid",
						borderColor: "#CBD5E0",
						borderRadius: "full",
						_checked: {
							bg: "brand.gray",
							color: "brand.brown",
						},
					},
				}),
			},
			defaultProps: {
				variant: "primary",
				colorScheme: "primary",
			},
		},
	},
	textStyles: {
		playfairBold: {
			fontFamily: "Playfair Display, serif",
			fontWeight: "bold",
		},
		playfair: {
			fontFamily: "Playfair Display, serif",
		},
		robotoSlab: {
			fontFamily: "Roboto Slab, serif",
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
