import { Box, Image, Flex } from "@chakra-ui/react";

function FeaturedImage({ flexDirection, alignment, title, date, url, alt }) {
	return (
		<Flex
			width="100%"
			direction={flexDirection}
			align="center"
			justify="space-around"
			my={4}
		>
			<Flex direction="column" align={alignment} justify="space-around">
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
