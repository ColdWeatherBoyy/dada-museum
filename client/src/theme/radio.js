import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
	radioAnatomy.keys
);

export const radioTheme = defineMultiStyleConfig({
	name: "Radio",
	parts: radioAnatomy.keys,
	baseStyle: {
		control: {
			borderRadius: "full",
			_checked: {
				bg: "brand.brown",
				color: "brand.gray",
			},
		},
	},
});
