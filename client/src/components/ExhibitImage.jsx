import { Box, Image, Text, Heading, Link } from "@chakra-ui/react";
import { useState } from "react";

function ExhibitImage({ destination, headingOne, headingTwo, src, alt, hoverText }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Box position="relative" maxW="100%">
			<Link destination={destination}>
				<Heading variant="exhibit-heading" textAlign="left" fontSize="1.3em" pb={0}>
					{headingOne}
				</Heading>
			</Link>
			<Heading variant="exhibit-heading" textAlign="left" fontSize="1.3em" pb={2}>
				{headingTwo}
			</Heading>
			<Box
				position="relative"
				borderRadius="sm"
				onMouseEnter={() => setIsActive(true)}
				onMouseLeave={() => setIsActive(false)}
				onTouchStart={() => (isActive ? setIsActive(false) : setIsActive(true))}
			>
				<Image src={src} alt={alt} borderRadius="md" />
				<Box
					position="absolute"
					bottom={0}
					left={0}
					width="100%"
					height="100%"
					opacity={isActive ? 1 : 0}
					transition="opacity 0.3s"
					bgGradient="linear(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,.8) 100%)"
					p={3}
					textStyle="robotoSlab"
					borderRadius="md"
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
