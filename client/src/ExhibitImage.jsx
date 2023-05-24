import { Box, Image, Text } from "@chakra-ui/react";

function ExhibitImage({ src, alt, hoverText, imageCredit }) {
	return (
		<Box position="relative" display="inline-block">
			<Image src={src} alt={alt} borderRadius="sm" />
			<Box
				position="absolute"
				bottom={0}
				left={0}
				width="100%"
				height="100%"
				opacity={0}
				transition="opacity 0.3s"
				_hover={{ opacity: 1 }}
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
					right="25%"
					fontSize="1.25vw"
				>
					{hoverText}
				</Text>
				<Text
					color="white"
					textAlign="right"
					position="absolute"
					bottom="5%"
					left="5%"
					right="5%"
					fontSize="1vw"
				>
					{imageCredit}
				</Text>
			</Box>
		</Box>
	);
}

export default ExhibitImage;
