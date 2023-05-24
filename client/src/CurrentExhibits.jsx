import { Box, SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import ExhibitImage from "./ExhibitImage";

function CurrentExhibits() {
	return (
		<Box paddingTop={16} w="100%" minH="90vh">
			<SimpleGrid columns={2} spacing={6} margin={(0, 10)}>
				<Box>
					<Flex direction="column" align="center">
						<Heading textAlign="left" variant="section-heading" fontSize="3em">
							Current <br />
							Exhibits
						</Heading>
						<Box width="100%" borderBottom="5px solid #D17B7B" />
					</Flex>
				</Box>
				<Box pt={6}>
					<Heading variant="exhibit-heading" textAlign="left" fontSize="1.5em" pb={0}>
						Champions of Collage
					</Heading>
					<Heading variant="exhibit-heading" textAlign="left" fontSize="1.25em" pb={2}>
						June '23 - June '24
					</Heading>
					<ExhibitImage
						src="/images/HochUntitledDada.jpeg"
						alt="A collage by Hannah Höch called Untitled (Dada)"
						hoverText="Tracing the evolution of photomontage and collage techniques in the early 20th century, this exhibit highlights works by Kurt Schwitters, William S. Burroughs, and others whose innovative approach to image-making transformed the art world."
						imageCredit="Untitled (Dada) by Hannah Höch, 1919"
					/>
				</Box>
			</SimpleGrid>
		</Box>
	);
}

export default CurrentExhibits;
