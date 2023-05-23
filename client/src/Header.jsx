import { Box, Heading, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./theme/heading.css";

function Header() {
	return (
		<Box
			bgColor="red.300"
			w="100%"
			minH="10vh"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
		>
			<Box display="flex" marginLeft="1vw">
				<Heading variant="first-d">D</Heading>
				<Heading variant="first-a">A</Heading>
				<Heading variant="second-d">D</Heading>
				<Heading variant="second-a">A&nbsp;&nbsp;&nbsp;</Heading>
				<Heading variant="art-museum-font">Art Museum</Heading>
			</Box>
			<IconButton
				aria-label="Toggle dropdown"
				marginRight="1vw"
				bg="transparent"
				icon={<HamburgerIcon boxSize={12} />}
			/>
		</Box>
	);
}

export default Header;
