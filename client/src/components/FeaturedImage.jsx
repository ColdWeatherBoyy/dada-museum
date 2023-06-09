import { Box, Image, Flex } from "@chakra-ui/react";

// Component for art images in the Featured Artist section, handling for alternating display with different props
function FeaturedImage({ flexDirection, alignment, textAlign, title, date, url, alt }) {
	return (
		<Flex
			direction={flexDirection}
			align={{ base: "auto", lg: "center" }}
			justify="space-evenly"
			mb={{ base: 0, lg: 8 }}
			mx={{ base: 4, lg: 0 }}
			height={{ base: "50vh", lg: "auto" }}
		>
			<Flex direction="column" align={alignment} width={{ base: "75%", lg: "30%" }}>
				<Box
					textStyle="robotoSlab"
					fontSize={{ base: "14px", sm: "15px", md: "18px" }}
					textAlign={textAlign}
				>
					{title}
				</Box>
				<Box
					textStyle="robotoSlab"
					fontSize={{ base: "12px", sm: "13px", md: "16px" }}
					textAlign={textAlign}
				>
					{date}
				</Box>
			</Flex>
			<Image
				src={url}
				alt={alt}
				maxW={{ base: "70%", lg: "35%" }}
				borderRadius="xl"
				zIndex="0"
				boxShadow="1px 3px 6px rgba(0, 0, 0, 0.3)"
			/>
		</Flex>
	);
}

export default FeaturedImage;
