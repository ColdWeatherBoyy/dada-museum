import { Box, Image, Text, Heading, AspectRatio } from "@chakra-ui/react";
import { useState } from "react";

function ExhibitImage({ headingOne, headingTwo, src, alt, hoverText, imageCredit }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Box position="relative" display="inline-block">
			<Heading variant="exhibit-heading" textAlign="left" fontSize="1.5em" pb={0}>
				{headingOne}
			</Heading>
			<Heading variant="exhibit-heading" textAlign="left" fontSize="1.25em" pb={2}>
				{headingTwo}
			</Heading>
			<Box
				position="relative"
				borderRadius="sm"
				onMouseEnter={() => setIsActive(true)}
				// onMouseLeave={() => setIsActive(false)}
				onTouchStart={() => (isActive ? setIsActive(false) : setIsActive(true))}
			>
				<Image
					src={src}
					alt={alt}
					borderRadius="sm"
					style={{ maxWidth: "100%", height: "auto" }}
				/>
				<Box
					position="absolute"
					bottom={0}
					left={0}
					width="100%"
					height="100%"
					opacity={isActive ? 1 : 0}
					transition="opacity 0.3s"
					bgGradient="linear(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,.8) 100%)"
					borderRadius="sm"
					p={2}
				>
					<Text
						color="white"
						textAlign="left"
						position="absolute"
						bottom="10%"
						left="5%"
						right={{ base: "5%", md: "15%", lg: "20%" }}
						fontSize={{ sm: "3vw", md: "1.75vw", lg: "1.25vw" }}
						mb={6}
					>
						{hoverText}
					</Text>
					<br /> <br />
					<Text
						color="white"
						textAlign="right"
						position="absolute"
						bottom="5%"
						left="5%"
						right="5%"
						fontSize={{ sm: "2.5vw", md: "1.25vw", lg: "1vw" }}
					>
						{imageCredit}
					</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default ExhibitImage;
