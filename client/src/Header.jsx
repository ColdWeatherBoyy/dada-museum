import {
	Box,
	Heading,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./theme/heading.css";

function Header() {
	return (
		<Box
			bgColor="red.300"
			w="100%"
			height="18vh"
			minH="10vh"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
		>
			<Box display="flex" alignItems="center" marginLeft="2vw">
				<Heading variant="first-d">D</Heading>
				<Heading variant="first-a">A</Heading>
				<Heading size="2xl" variant="second-d">
					D
				</Heading>
				<Heading variant="second-a">A</Heading>
				<Heading>&nbsp;&nbsp;</Heading>
				<Heading variant="art-museum-font">Art Museum</Heading>
			</Box>
			<Menu>
				<MenuButton
					marginRight="1vw"
					as={IconButton}
					aria-label="Options"
					icon={<HamburgerIcon boxSize={12} />}
					bg="transparent"
				/>
				<MenuList>
					<MenuItem>
						<Box textStyle="dropdownFirstD">D</Box>
						<Text>ada</Text>
					</MenuItem>
					<MenuItem>
						<Box textStyle="dropdownFirstA">A</Box>
						<Text>bout the Museum</Text>
					</MenuItem>
					<MenuItem>
						<Box textStyle="dropdownSecondD">D</Box>
						<Text>isplays</Text>
					</MenuItem>
					<MenuItem>
						<Box textStyle="dropdownSecondA">A</Box>
						<Text>dmissions</Text>
					</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
}

export default Header;
