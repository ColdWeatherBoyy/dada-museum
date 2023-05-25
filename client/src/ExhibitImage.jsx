import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";

function ExhibitImage({ headingOne, headingTwo, src, alt, hoverText, imageCredit }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Box position="relative" display="inline-block">
			<Heading variant="exhibit-heading" textAlign="left" fontSize="2em" pb={0}>
				{headingOne}
			</Heading>
			<Heading variant="exhibit-heading" textAlign="left" fontSize="1.75em" pb={2}>
				{headingTwo}
			</Heading>
			<Box
				position="relative"
				borderRadius="sm"
				onMouseEnter={() => setIsActive(true)}
				onMouseLeave={() => setIsActive(false)}
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
					bgGradient="linear(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,.8) 100%)"
					borderRadius="sm"
					p={3}
					textStyle="battambang"
				>
					<Text
						color="white"
						textAlign="left"
						position="absolute"
						bottom={4}
						left={4}
						pr={{ sm: "10%", md: "10%", lg: "10%" }}
						fontSize={{ sm: "17px", md: "15px", lgm: "18px" }}
					>
						{hoverText}
					</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default ExhibitImage;
