import { Box, Image, Flex } from "@chakra-ui/react";

function FeaturedImage({ flexDirection, alignment, title, date, url, alt }) {
	return (
		<Flex
			direction={flexDirection}
			align={{ base: "auto", lg: "center" }}
			justify={{ base: "space-between", lg: "space-around" }}
			my={{ base: 0, lg: 4 }}
			mx={{ base: 4, lg: 0 }}
			height={{ base: "50vw", lg: "auto" }}
		>
			<Flex direction="column" align={alignment}>
				<Box textStyle="battambang" fontSize={{ sm: "17px", md: "15px", lgm: "18px" }}>
					{title}
				</Box>
				<Box textStyle="battambang" fontSize={{ sm: "15px", md: "13px", lgm: "16px" }}>
					{date}
				</Box>
			</Flex>
			<Image src={url} alt={alt} style={{ maxWidth: "100%", height: "auto" }} />
		</Flex>
	);
}

export default FeaturedImage;
