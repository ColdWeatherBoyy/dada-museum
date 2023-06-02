import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader.jsx";
import MapComponent from "../components/MapComponent.jsx";

function SiteMap() {
	return (
		<Box backgroundColor="red.300" pt={6}>
			<Box mx={{ sm: 8, md: 8, lg: 16 }}>
				<SectionHeader headerText="Current Exhibits" />
				<SimpleGrid
					columns={{ sm: 1, md: 2 }}
					spacingX={{ sm: 0, md: 8, lg: 16 }}
					spacingY={20}
					display="flex"
					flexDirection="column"
					justifyContent="space-between"
					mx={{ sm: 8, md: 8, lg: 16 }}
				></SimpleGrid>
				<SimpleGrid
					columns={{ sm: 1, md: 2 }}
					spacingX={{ sm: 0, md: 8, lg: 16 }}
					spacingY={20}
					display="flex"
					flexDirection="column"
					justifyContent="space-between"
					mx={{ sm: 8, md: 8, lg: 16 }}
				>
					<Box
						display="flex"
						flexDirection={{ base: "column", md: "row" }}
						justifyContent="space-around"
						alignItems={{ base: "center", md: "start" }}
					>
						<MapComponent
							headingText="Site Map"
							contentArray={[
								"Home Page",
								"Dada",
								"About the Museum",
								"Displays",
								"Admissions",
							]}
						/>
						<MapComponent
							headingText="Elias Spector-Zabusky"
							contentArray={["Github", "LinkedIN"]}
						/>
						<MapComponent
							headingText="David Keim"
							contentArray={["Github", "LinkedIN"]}
						/>
					</Box>
				</SimpleGrid>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="center"
					textAlign="center"
					textStyle="battambang"
					bgColor="red.300"
					w="100%"
				>
					Made by Elias Spector-Zabusky and David Keim, 2023
				</Box>
			</Box>
		</Box>
	);
}

export default SiteMap;
