import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Component that renders images with text overlays for the exhibit section, as well as header text and links
function ExhibitImage({ destination, headingOne, headingTwo, src, alt, hoverText }) {
	// state to check hover/tapped status
	const [isActive, setIsActive] = useState(false);

	return (
		<Box position="relative" maxW="100%">
			<Link to={destination}>
				<Heading
					variant="exhibit-heading"
					textAlign="left"
					fontSize="1.3em"
					pb={0}
					_hover={{ textDecorationLine: "underline", color: "#B1BAC1" }}
				>
					{headingOne}
				</Heading>
			</Link>
			<Heading variant="exhibit-heading" textAlign="left" fontSize="1.3em" pb={2}>
				{headingTwo}
			</Heading>
			<Box
				position="relative"
				borderRadius="sm"
				// to handle for desktop and mobile hover/tap setting state
				onMouseEnter={() => setIsActive(true)}
				onMouseLeave={() => setIsActive(false)}
				onTouchStart={() => (isActive ? setIsActive(false) : setIsActive(true))}
			>
				<Image src={src} alt={alt} borderRadius="md" boxShadow="dark-lg" />
				{/* overlay box that is visible when isActive is true with gradient overlay for legible text */}
				<Box
					position="absolute"
					bottom={0}
					left={0}
					width="100%"
					height="100%"
					opacity={isActive ? 1 : 0}
					transition="opacity 0.3s"
					bgGradient={{
						base: "linear(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,.8) 100%)",
						md: "linear(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,.8) 100%)",
						lg: "linear(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,.8) 100%)",
					}}
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
						fontSize={{ sm: "17px", md: "14.5px", lgm: "18px" }}
					>
						{hoverText}
					</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default ExhibitImage;
