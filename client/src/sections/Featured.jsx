import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import FeaturedImage from "../components/FeaturedImage";

function Featured() {
	return (
		<Box paddingY={16} minH="90vh" mx={{ sm: 8, md: 8, lg: 16 }}>
			<Grid templateColumns="2fr 3fr" height="50vw" gap={{ sm: 0, md: 8, lg: 16 }}>
				<Flex width="100%" direction="column" align="center" justify="space-evenly">
					<Box width="100%" alignSelf="flex-start">
						<Heading
							variant="section-heading"
							fontSize={{ base: "3.1em", sm: "3.15em", xl: "4em" }}
						>
							Featured {"\n"}
							Artist
						</Heading>
						<Box width="100%" borderBottom="5px solid #D17B7B" marginBottom="5%" />
					</Box>
					<Flex justify="center" width="70%" position="relative">
						<Image
							src="/images/PortraitofMarcelDuchampManRay.jpg"
							alt="Man Ray's Portrait of Marcel Duchamp, 1920-1921"
							width="100%"
						/>
						<Box
							padding=".5em .5em"
							textStyle="playfairBold"
							fontSize={{
								sm: "22px",
								lg: "24px",
								xl: "28px",
							}}
							letterSpacing={{ sm: "0.1em", md: "0.15em", lg: "0.2em" }}
							textAlign="center"
							display="inline-block"
							position="absolute"
							bottom={6}
							maxWidth={{ base: "80%", lg: "70%", "2xl": "100%" }}
							style={{
								backgroundColor: "rgba(200, 200, 200, 0.5)",
								color: "white",
								backdropFilter: "blur(1.5px)",
								WebkitBackdropFilter: "blur(1.5px)",
							}}
						>
							Marcel Duchamp
						</Box>
					</Flex>
				</Flex>
				<Flex
					direction="column"
					overflowY="scroll"
					mt={16}
					position="relative"
					// boxShadow="inset 0px 0px 20px rgba(0, 0, 0, 0.2)"
				>
					<FeaturedImage
						flexDirection="row"
						alignment="flex-start"
						title="The Fountain"
						date="1917"
						url="/images/Duchamp.jpeg"
						alt="Duchamp"
					/>
					<FeaturedImage
						flexDirection="row-reverse"
						alignment="flex-end"
						title="The Fountain"
						date="1917"
						url="/images/Duchamp.jpeg"
						alt="Duchamp"
					/>
					<FeaturedImage
						flexDirection="row"
						alignment="flex-start"
						title="The Fountain"
						date="1917"
						url="/images/Duchamp.jpeg"
						alt="Duchamp"
					/>
					<FeaturedImage
						flexDirection="row-reverse"
						alignment="flex-end"
						title="The Fountain"
						date="1917"
						url="/images/Duchamp.jpeg"
						alt="Duchamp"
					/>
				</Flex>
			</Grid>
		</Box>
	);
}

export default Featured;
