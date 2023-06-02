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

function Header() {
	return (
		<Box
			bgColor="red.300"
			w="100%"
			// height="18vh"
			minH="10vh"
			py="6"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			px={{ sm: 8, md: 8, lg: 10 }}
		>
			<Box display="flex" flexDirection={{base: "column", lg: "row"}} alignItems={{base: "start", lg: "center"}} marginLeft="2vw">
				<Box display="flex" alignItems="center">
					<Heading mt={{base: "2", lg: "2"}} variant={{base: "first-d-small", lg: "first-d"}}>D</Heading>
					<Heading variant={{base: "first-a-small", lg: "first-a"}}>A</Heading>
					<Heading mt={{base: "1", lg: "2"}} size="2xl" variant={{base: "second-d-small", lg: "second-d"}}>
						D
					</Heading>
					<Heading mb={{base: "0.5" , lg: "2"}} variant={{base: "second-a-small", lg: "second-a"}}>A</Heading>
					<Heading>&nbsp;&nbsp;</Heading>
				</Box>
				<Heading mt="0.5" variant={{base: "art-museum-font-small", lg: "art-museum-font"}}>Art Museum</Heading>
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
