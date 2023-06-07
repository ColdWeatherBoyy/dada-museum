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
import { Link } from "react-router-dom";

function Header() {
	return (
		<Box
			bgColor="#53443D"
			w="100%"
			// height="18vh"
			minH="10vh"
			py="6"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			px={{ sm: 8, md: 8, lg: 10 }}
		>
			<Box
				display="flex"
				flexDirection={{ base: "column", lg: "row" }}
				alignItems={{ base: "start", lg: "center" }}
				marginLeft="2vw"
				color="gray.100"
			>
				<Box display="flex" alignItems="center">
					<Heading
						mt={{ base: "2", lg: "2" }}
						variant={{ base: "first-d-small", lg: "first-d" }}
					>
						D
					</Heading>
					<Heading variant={{ base: "first-a-small", lg: "first-a" }}>A</Heading>
					<Heading
						mt={{ base: "1", lg: "2" }}
						size="2xl"
						variant={{ base: "second-d-small", lg: "second-d" }}
					>
						D
					</Heading>
					<Heading
						mb={{ base: "0.5", lg: "2" }}
						variant={{ base: "second-a-small", lg: "second-a" }}
					>
						A
					</Heading>
					<Heading>&nbsp;&nbsp;</Heading>
				</Box>
				<Heading
					mt="0.5"
					variant={{ base: "art-museum-font-small", lg: "art-museum-font" }}
				>
					Art Museum
				</Heading>
			</Box>
			<Menu>
				<MenuButton
					marginRight="1vw"
					as={IconButton}
					aria-label="Options"
					icon={<HamburgerIcon boxSize={12} />}
					bg="transparent"
					color="gray.100"
					_hover={{
						transform: "scale(1.2)",
						color: "gray.100",
					}}
					_active={{
						transform: "scale(0.9)",
					}}
					_expanded={{
						color: "#53443D",
						bg: "gray.100",
						transform: "scale(1)",
					}}
					transition="transform 0.3s ease, color 0.3s ease, bg 0.3s ease"
				/>
				<MenuList>
					<Link to={`/link`}>
						<MenuItem>
							<Box textStyle="dropdownFirstD" mb={1.5}>
								D
							</Box>
							<Text textStyle="robotoSlab">ada</Text>
						</MenuItem>
					</Link>
					<Link to={`/link`}>
						<MenuItem>
							<Box textStyle="dropdownFirstA" mb={3.5}>
								A
							</Box>
							<Text textStyle="robotoSlab">bout the Museum</Text>
						</MenuItem>
					</Link>
					<Link to={`/link`}>
						<MenuItem>
							<Box textStyle="dropdownSecondD" mb={2}>
								D
							</Box>
							<Text textStyle="robotoSlab">isplays</Text>
						</MenuItem>
					</Link>
					<Link to={`/link`}>
						<MenuItem>
							<Box textStyle="dropdownSecondA" mb={4}>
								A
							</Box>
							<Text textStyle="robotoSlab">dmissions</Text>
						</MenuItem>
					</Link>
				</MenuList>
			</Menu>
		</Box>
	);
}

export default Header;
