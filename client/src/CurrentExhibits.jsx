import { Box, SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ExhibitImage from "./ExhibitImage";
import ExhibitCard from "./ExhibitCard";

function CurrentExhibits() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			console.log(windowWidth);
		};

		window.addEventListener("resize", handleResize);
	}, [window.innerWidth]);

	return (
		<Box paddingY={16} w="100%" minH="90vh">
			<SimpleGrid
				columns={{ sm: 1, md: 2 }}
				spacingX={{ sm: 0, md: 8, lg: 16 }}
				spacingY={20}
				mx={{ sm: 8, md: 8, lg: 16 }}
				justifyContent="center"
			>
				{windowWidth <= 768 ? (
					<>
						<Flex direction="column" align="center" justify="space-around" height="100%">
							<Box width="100%" alignSelf="flex-start">
								<Heading textAlign="center" variant="section-heading" fontSize="3.15em">
									Current <br />
									Exhibits
								</Heading>
								<Box width="100%" borderBottom="5px solid #D17B7B" marginBottom="5%" />
							</Box>
							<ExhibitImage
								// destination=""
								headingOne="Champions of Collage"
								headingTwo="June '23 - June '24"
								src="/images/DetailCutWithTheKitchenKnifeHoch.jpg"
								alt="Excerpt from Hannah Höch's Cut with the Dada Kitchen Knife through the Last Weimar Beer-Belly Cultural Epoch in Germany"
								hoverText="Tracing the evolution of photomontage and collage in the early 20th century, this exhibit highlights works by Kurt Schwitters, William S. Burroughs, and others whose innovative approach transformed the art world."
							/>
							<ExhibitImage
								// destination=""
								headingOne="The Art of Chance"
								headingTwo="Feb '23 - Feb '24"
								src="/images/ExcerptAccordingToTheLawsOfChanceJeanArp.jpeg"
								alt="Excerpt from Jean Arp's According To The Laws Of Chance"
								hoverText="Explore the role of randomness in the creative process of Dada artists like Jean Arp, Francis Picabia, and Marcel Duchamp, as they sought to embrace chance, errors, and the unexpected in their art-making process."
							/>
							<ExhibitImage
								// destination=""
								headingOne="Duchamp's Readymades"
								headingTwo="Closing Sept. '23"
								src="/images/DuchampTheFountain.jpg"
								alt="Marcel Duchamp and his most well-known Readymade The Fountain"
								hoverText="Ordinary objects presented in extraordinary places. A term coined by the titular artist in th 1910s, Readymades test the art worlds willingness to open its definition of 'art.' "
							/>
							<ExhibitCard />
						</Flex>
					</>
				) : (
					<>
						<Box>
							<Flex
								direction="column"
								align="center"
								justify="space-around"
								height="100%"
							>
								<Box width="100%" alignSelf="flex-start">
									<Heading textAlign="center" variant="section-heading" fontSize="3.15em">
										Current <br />
										Exhibits
									</Heading>
									<Box width="100%" borderBottom="5px solid #D17B7B" marginBottom="10%" />
								</Box>
								<ExhibitImage
									// destination=""
									headingOne="The Art of Chance"
									headingTwo="Feb '23 - Feb '24"
									src="/images/ExcerptAccordingToTheLawsOfChanceJeanArp.jpeg"
									alt="Excerpt from Jean Arp's According To The Laws Of Chance"
									hoverText="Explore the role of randomness in the creative process of Dada artists like Jean Arp, Francis Picabia, and Marcel Duchamp, as they sought to embrace chance, errors, and the unexpected in their art-making process."
								/>
								<ExhibitCard />
							</Flex>
						</Box>
						<Flex direction="column" pt={6}>
							<ExhibitImage
								// destination=""
								headingOne="Champions of Collage"
								headingTwo="June '23 - June '24"
								src="/images/DetailCutWithTheKitchenKnifeHoch.jpg"
								alt="Excerpt from Hannah Höch's Cut with the Dada Kitchen Knife through the Last Weimar Beer-Belly Cultural Epoch in Germany"
								hoverText="Tracing the evolution of photomontage and collage in the early 20th century, this exhibit highlights works by Kurt Schwitters, William S. Burroughs, and others whose innovative approach transformed the art world."
							/>
							<ExhibitImage
								// destination=""
								headingOne="Duchamp's Readymades"
								headingTwo="Closing Sept. '23"
								src="/images/DuchampTheFountain.jpg"
								alt="Marcel Duchamp and his most well-known Readymade, The Fountain"
								hoverText="Ordinary objects presented in extraordinary places. A term coined by the titular artist in th 1910s, Readymades test the art worlds willingness to open its definition of 'art.' "
							/>
						</Flex>
					</>
				)}
			</SimpleGrid>
		</Box>
	);
}

export default CurrentExhibits;
