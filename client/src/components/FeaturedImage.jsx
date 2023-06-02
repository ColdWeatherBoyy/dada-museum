import { Box, Image, Flex } from "@chakra-ui/react";

function FeaturedImage({ flexDirection, alignment, textAlign, title, date, url, alt }) {
	return (
		<Flex
			direction={flexDirection}
			align={{ base: "auto", lg: "center" }}
			justify={{ base: "space-between", lg: "space-evenly" }}
			mb={{ base: 0, lg: 8 }}
			mx={{ base: 4, lg: 0 }}
			height={{ base: "55vw", lg: "auto" }}
		>
			<Flex direction="column" align={alignment} width={{ base: "75%", lg: "30%" }}>
				<Box
					textStyle="battambang"
					fontSize={{ base: "14px", sm: "15px", md: "18px" }}
					textAlign={textAlign}
				>
					{title}
				</Box>
				<Box textStyle="battambang" fontSize={{ base: "12px", sm: "13px", md: "16px" }}>
					{date}
				</Box>
			</Flex>
			<Image src={url} alt={alt} maxW={{ base: "70%", lg: "35%" }} />
		</Flex>
	);
}

export default FeaturedImage;
