import { Box, SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import SectionHeader from "../components/SectionHeader";
import ExhibitImage from "../components/ExhibitImage";
import ButtonArray from "../components/ButtonArray";

function CurrentExhibits() {
	const links = [
		{
			text: "Permanent Exhibits",
			link: "https://dada-museum.herokuapp.com/link",
		},
		{
			text: "Upcoming Exhibits",
			link: "https://dada-museum.herokuapp.com/link",
		},
		{
			text: "Previous Exhibits",
			link: "https://dada-museum.herokuapp.com/link",
		},
	];

	return (
		<Box pt={6} pb={12} mx={{ sm: 8, md: 8, lg: 16 }}>
			<SectionHeader headerText="Current Exhibits" />
			<SimpleGrid
				columns={{ sm: 1, md: 2 }}
				spacingX={{ sm: 0, md: 4, lg: 8 }}
				spacingY={{ base: 4, lg: 8 }}
				mx="5%"
				justifyItems="center"
				alignItems="center"
			>
				<ExhibitImage
					destination="/link"
					headingOne="Champions of Collage"
					headingTwo="June '23 - June '24"
					src="/images/DetailCutWithTheKitchenKnifeHoch.jpg"
					alt="Excerpt from Hannah Höch's Cut with the Dada Kitchen Knife through the Last Weimar Beer-Belly Cultural Epoch in Germany"
					hoverText="Tracing the evolution of photomontage and collage in the early 20th century, this exhibit highlights works by Kurt Schwitters, William S. Burroughs, and others whose innovative approach transformed the art world."
				/>
				<ExhibitImage
					destination="/link"
					headingOne="The Art of Chance"
					headingTwo="Feb '23 - Feb '24"
					src="/images/ExcerptAccordingToTheLawsOfChanceJeanArp.jpeg"
					alt="Excerpt from Jean Arp's According To The Laws Of Chance"
					hoverText="Explore the role of randomness in the creative process of Dada artists like Jean Arp, Francis Picabia, and Marcel Duchamp, as they sought to embrace chance, errors, and the unexpected in their art-making process."
				/>
				<ExhibitImage
					destination="/link"
					headingOne="Duchamp's Readymades"
					headingTwo="Closing Sept. '23"
					src="/images/DuchampTheFountain.jpg"
					alt="Marcel Duchamp and his most well-known Readymade The Fountain"
					hoverText="Ordinary objects presented in extraordinary places. A term coined by the titular artist in th 1910s, Readymades test the art worlds willingness to open its definition of 'art.' "
				/>
				<Flex>
					<ButtonArray links={links} padding={{ base: 3, md: 16 }} />
				</Flex>
			</SimpleGrid>
		</Box>
	);
}

export default CurrentExhibits;
