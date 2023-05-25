import { Box, SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import ExhibitImage from "./ExhibitImage";
import ExhibitCard from "./ExhibitCard";

function CurrentExhibits() {
	return (
		<Box paddingTop={16} w="100%" minH="90vh">
			<SimpleGrid
				columns={{ sm: 1, md: 2 }}
				spacingX={{ sm: 0, md: 8, lg: 16 }}
				spacingY={20}
				mx={{ sm: 8, md: 8, lg: 16 }}
				justifyContent="center"
				rowGap={6}
			>
				<Box>
					<Flex direction="column" align="center" justify="space-around" height="100%">
						<Box width="100%" alignSelf="flex-start">
							<Heading textAlign="center" variant="section-heading" fontSize="3.15em">
								Current <br />
								Exhibits
							</Heading>
							<Box width="100%" borderBottom="5px solid #D17B7B" />
						</Box>
						<ExhibitImage
							headingOne="Champions of Collage"
							headingTwo="June '23 - June '24"
							src="/images/DetailCutWithTheKitchenKnifeHoch.jpg"
							alt="Excerpt from Hannah Höch's Cut with the Dada Kitchen Knife through the Last Weimar Beer-Belly Cultural Epoch in Germany"
							hoverText="Tracing the evolution of photomontage and collage in the early 20th century, this exhibit highlights works by Kurt Schwitters, William S. Burroughs, and others whose innovative approach transformed the art world."
						/>
						<ExhibitCard />
					</Flex>
				</Box>
				<Box pt={6}>
					<ExhibitImage
						headingOne="Champions of Collage"
						headingTwo="June '23 - June '24"
						src="/images/DetailCutWithTheKitchenKnifeHoch.jpg"
						alt="Excerpt from Hannah Höch's Cut with the Dada Kitchen Knife through the Last Weimar Beer-Belly Cultural Epoch in Germany"
						hoverText="Tracing the evolution of photomontage and collage in the early 20th century, this exhibit highlights works by Kurt Schwitters, William S. Burroughs, and others whose innovative approach transformed the art world."
					/>
					<ExhibitImage
						headingOne="Champions of Collage"
						headingTwo="June '23 - June '24"
						src="/images/DetailCutWithTheKitchenKnifeHoch.jpg"
						alt="Excerpt from Hannah Höch's Cut with the Dada Kitchen Knife through the Last Weimar Beer-Belly Cultural Epoch in Germany"
						hoverText="Tracing the evolution of photomontage and collage in the early 20th century, this exhibit highlights works by Kurt Schwitters, William S. Burroughs, and others whose innovative approach transformed the art world."
					/>
				</Box>
			</SimpleGrid>
		</Box>
	);
}

export default CurrentExhibits;
