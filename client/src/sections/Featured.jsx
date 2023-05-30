import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";

function Featured() {
	return (
		<Box paddingY={16} minH="90vh" mx={{ sm: 8, md: 8, lg: 16 }}>
			<Grid templateColumns="3fr 4fr" height="400px" gap={{ sm: 0, md: 8, lg: 16 }}>
				<Flex direction="column" align="center" justify="space-around" bg="gray.100">
					<Box width="100%" alignSelf="flex-start">
						<Heading
							variant="section-heading"
							fontSize={{ base: "3.1em", sm: "3.15em", xl: "4em" }}
						>
							Featured <br />
							Artist
						</Heading>
						<Box width="100%" borderBottom="5px solid #D17B7B" marginBottom="5%" />
					</Box>
					<Image src="/images/Duchamp.jpeg" />
					<Box textStyle="playfairBold" fontSize={30}>
						Duchamp
					</Box>
				</Flex>
				<Flex direction="column" align="center" bg="gray.200" overflowY="scroll" py={4}>
					<Image my={4} src="/images/Duchamp.jpeg" />
					<Image my={4} src="/images/Duchamp.jpeg" />
					<Image my={4} src="/images/Duchamp.jpeg" />
					<Image my={4} src="/images/Duchamp.jpeg" />
				</Flex>
			</Grid>
		</Box>
	);
}

export default Featured;
