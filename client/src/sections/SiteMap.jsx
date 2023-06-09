// Necessary imports from Chakra and other components
import { Box, SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import MapComponent from "../components/MapComponent.jsx";

function SiteMap() {
	return (
		<Box bgColor="#53443D" pt={6} pb={2} color="gray.100">
			<Box mx={{ sm: 8, md: 8, lg: 16 }}>
				<Flex direction="column" mb={6}>
					<Heading variant="section-heading" fontWeight="800">
						Site Map
					</Heading>
					<Box borderBottom="2px solid #EDF2F7" marginBottom={4} borderRadius={2} />
				</Flex>
				<SimpleGrid
					columns={{ sm: 1, md: 3 }}
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
						{/* Use of Map Component */}
						<MapComponent
							headingText="Site Map"
							contentArray={[
								"Home Page",
								"Dada",
								"About the Museum",
								"Displays",
								"Admissions",
							]}
							links={["/", "/link/", "/link/", "/link/", "/link/"]}
						/>
						<MapComponent
							headingText="Elias Spector-Zabusky"
							contentArray={["GitHub", "LinkedIn"]}
							links={[
								"https://github.com/ColdWeatherBoyy",
								"https://www.linkedin.com/in/elias-sz/",
							]}
						/>
						<MapComponent
							headingText="David Keim"
							contentArray={["GitHub", "LinkedIn", "Portfolio"]}
							links={[
								"https://github.com/keimdm",
								"https://www.linkedin.com/in/keimdavid/",
								"https://keimdm.github.io/portfolio/",
							]}
						/>
					</Box>
				</SimpleGrid>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="center"
					textAlign="center"
					textStyle="robotoSlab"
					bgColor="53443D"
					w="100%"
				>
					Made by Elias Spector-Zabusky and David Keim, 2023
				</Box>
			</Box>
		</Box>
	);
}

export default SiteMap;
