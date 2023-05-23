import { extendTheme } from "@chakra-ui/react";
import { headingTheme } from "./heading";

const theme = extendTheme({
	components: { Heading: headingTheme },
});

export default theme;
