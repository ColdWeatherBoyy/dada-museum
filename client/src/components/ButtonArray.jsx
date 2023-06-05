import { Box} from "@chakra-ui/react";
import ButtonLink from "./ButtonLink";

function ButtonArray({ links }) {
	return (
		<Box
			display="flex"
			flexDirection="column"
			h="100%"
			justifyContent="space-around"
		>
			{links.map((link, index) => {
				return <ButtonLink key={index} buttonText={link.text} link={link.link} />;
			})}
		</Box>
	);
}

export default ButtonArray;
