import { Box } from "@chakra-ui/react";
import ButtonLink from "./ButtonLink";

// Component that renders arrays of ButtonLinks together for grouped usage, passing props for necessary values
function ButtonArray({ links, padding }) {
	return (
		<Box display="flex" flexDirection="column" h="100%" py={padding} alignItems="center">
			{links.map((link, index) => {
				return <ButtonLink key={index} buttonText={link.text} link={link.link} />;
			})}
		</Box>
	);
}

export default ButtonArray;
