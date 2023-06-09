import { Box, Text, Button } from "@chakra-ui/react";
import Header from "../sections/Header";
import SiteMap from "../sections/SiteMap";
import ButtonLink from "../components/ButtonLink.jsx";

// Secondary page for links that don't lead anywhere for sample site
function LinkDestination() {
	return (
		<Box
			minH="100vh"
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
		>
			<Header />
			<Box
				mx={{ base: 12, md: 32, lg: 44 }}
				py={{ base: 6, md: 0 }}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
			>
				<Text textStyle="robotoSlab">
					This website is a demo of an imaginary museum homepage intended as a portfolio
					item, so the links don't lead anywhere. Click the button below to return to the
					homepage.
				</Text>
				<Box width="50%">
					<ButtonLink buttonText="Return to Homepage" link="/" />
				</Box>
			</Box>
			<SiteMap />
		</Box>
	);
}

export default LinkDestination;
