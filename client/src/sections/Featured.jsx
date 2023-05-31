import { Box, Flex, Grid, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import FeaturedImage from "../components/FeaturedImage";

function Featured() {
	const scrollBoxRef = useRef(null);
	const [scrollDirection, setScrollDirection] = useState({
		left: false,
		right: false,
		up: false,
		down: true,
	});

	// if check to see window size and set scrollDirection accordingly
	useEffect(() => {
		if (window.innerWidth < 992) {
			setScrollDirection({
				left: false,
				right: true,
				up: false,
				down: false,
			});
		}
	}, []);

	useEffect(() => {
		const scrollBox = scrollBoxRef.current;
		const isScrollable = scrollBox.scrollWidth > scrollBox.clientWidth;

		const handleScroll = () => {
			const isScrollableX = scrollBox.scrollWidth > scrollBox.clientWidth;
			const isScrollableY = scrollBox.scrollHeight > scrollBox.clientHeight;

			setScrollDirection({
				left: scrollBox.scrollLeft > 0 && isScrollableX,
				right:
					scrollBox.scrollLeft < scrollBox.scrollWidth - scrollBox.clientWidth &&
					isScrollableX,
				up: scrollBox.scrollTop > 0 && isScrollableY,
				down:
					scrollBox.scrollTop < scrollBox.scrollHeight - scrollBox.clientHeight &&
					isScrollableY,
			});
		};

		scrollBox.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleScroll);

		return () => {
			scrollBox.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

	useEffect(() => {
		console.log(scrollDirection);
	}, [scrollDirection]);

	return (
		<Box paddingY={16} minH="90vh" mx={{ sm: 8, md: 8, lg: 16 }}>
			<Grid
				templateColumns={{ base: "1fr", lg: "2fr 3fr" }}
				height={{ base: "auto", lg: "50vw" }}
				gap={{ sm: 0, md: 8, lg: 16 }}
			>
				<Flex width="100%" direction="column" align="center" justify="space-evenly">
					<Box width="100%" alignSelf="flex-start">
						<Heading
							variant="section-heading"
							fontSize={{ base: "3em", sm: "3.15em", xl: "4em" }}
						>
							Featured <br />
							Artist
						</Heading>
						<Box width="100%" borderBottom="5px solid #D17B7B" marginBottom="5%" />
					</Box>
					<Flex
						justify="center"
						width={{ base: "50%", md: "45%", lg: "70%" }}
						position="relative"
					>
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
							maxWidth={{ base: "70%", md: "70%", "2xl": "100%" }}
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
				<Box
					ref={scrollBoxRef}
					overflowY={{ base: "visible", lg: "scroll" }}
					overflowX={{ base: "scroll", lg: "visible" }}
					position="relative"
					height="100%"
				>
					{/* {isLoading ? (
						<div>Loading...</div>
					) : ( */}
					<Box pointerEvents="none">
						{scrollDirection.left && <Box>Left</Box>}
						{scrollDirection.right && <Box>Right</Box>}
						{scrollDirection.up && <Box>Up</Box>}
						{scrollDirection.down && <Box>Down</Box>}
					</Box>
					{/* )} */}
					<Flex
						direction={{ base: "row", lg: "column" }}
						my={{ base: 4, lg: 0 }}
						position="relative"
						width={{ base: "330%", md: "270%", lg: "auto" }}
						justify="space-around"
					>
						<FeaturedImage
							flexDirection={{ base: "column-reverse", lg: "row-reverse" }}
							alignment={{ base: "flex-start", lg: "flex-end" }}
							title="The Fountain"
							date="1917"
							url="/images/Duchamp.jpeg"
							alt="Duchamp"
						/>
						<FeaturedImage
							flexDirection={{ base: "column", lg: "row" }}
							alignment={{ base: "flex-end", lg: "flex-start" }}
							title="The Fountain"
							date="1917"
							url="/images/Duchamp.jpeg"
							alt="Duchamp"
						/>
						<FeaturedImage
							flexDirection={{ base: "column-reverse", lg: "row-reverse" }}
							alignment={{ base: "flex-start", lg: "flex-end" }}
							title="The Fountain"
							date="1917"
							url="/images/Duchamp.jpeg"
							alt="Duchamp"
						/>
						<FeaturedImage
							flexDirection={{ base: "column", lg: "row" }}
							alignment={{ base: "flex-end", lg: "flex-start" }}
							title="The Fountain"
							date="1917"
							url="/images/Duchamp.jpeg"
							alt="Duchamp"
						/>
						<FeaturedImage
							flexDirection={{ base: "column-reverse", lg: "row-reverse" }}
							alignment={{ base: "flex-start", lg: "flex-end" }}
							title="The Fountain"
							date="1917"
							url="/images/Duchamp.jpeg"
							alt="Duchamp"
						/>
						<FeaturedImage
							flexDirection={{ base: "column", lg: "row" }}
							alignment={{ base: "flex-end", lg: "flex-start" }}
							title="The Fountain"
							date="1917"
							url="/images/Duchamp.jpeg"
							alt="Duchamp"
						/>
					</Flex>
				</Box>
			</Grid>
		</Box>
	);
}

export default Featured;
