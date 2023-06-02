import { Box, SimpleGrid, Heading } from "@chakra-ui/react"
import VisitComponent from "../components/VisitComponent.jsx"

function SiteMap() {
    return (
        <Box paddingTop={6}>
			<SimpleGrid
				columns={{ sm: 1, md: 2 }}
				spacingX={{ sm: 0, md: 8, lg: 16 }}
				spacingY={20}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mx={{ sm: 8, md: 8, lg: 16 }}
			>
                <Box width="45%" alignSelf="flex-start">
                    <Heading variant="section-heading" fontSize="2.25em">
                        Site Map
                    </Heading>
                    <Box width="100 %" borderBottom="5px solid #D17B7B" marginBottom="10%" />
                </Box>
            </SimpleGrid>
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
                     flexDirection={{base: "column", md: "row" }} 
                     justifyContent="space-around"
                >
                    <VisitComponent headingText="Site Map" contentArray={["Home Page", "Dada", "About the Museum", "Displays", "Admissions"]} />
                    <VisitComponent headingText="Elias Spector-Zabusky" contentArray={["Email", "Github", "LinkedIN"]} />
                    <VisitComponent headingText="David Keim" contentArray={["Email", "Github", "LinkedIN"]} />
                </Box>
			</SimpleGrid>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                textStyle="battambang"
                bgColor="red.300"
                w="100vw"
            >
                Made by Elias Spector-Zabusky and David Keim, 2023
            </Box>
		</Box>
    );
}

export default SiteMap;