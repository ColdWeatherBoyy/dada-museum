import { Box, Flex, Grid, Image, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import FeaturedImage from "../components/FeaturedImage";
import Button2 from "../components/Button2";
import Loader from "../components/Loader";

function Featured() {
	// establish states for the featured artist
	const [featuredArtistImageInfo, setFeaturedArtistImageInfo] = useState([]);
	const [loadingArtist, setLoadingArtist] = useState(true);
	const [loadingArt, setLoadingArt] = useState(true);
	const [selectedArtist, setSelectedArtist] = useState({});
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			// console.log(windowWidth);
		};

		window.addEventListener("resize", handleResize);
	}, [window.innerWidth]);

	// function to pull random images from the AIC API for Duchamp (in future, use state to determine artist)
	const fillFeaturedArtistImages = async () => {
		try {
			// fetch request to AIC api for featured artist
			const featuredArtist = selectedArtist.name
				.toLowerCase()
				.replace(" ", "-")
				.replace("(hans) ", "");
			const response = await fetch(`/api/aic/${featuredArtist}`, {
				method: "GET",
			});
			const data = await response.json();

			// set up array to hold random images (to deal for asynchronous nature of state defining)
			const arrayOfRandomImages = [];
			const randomIndexArray = [];

			// for loop to grab 6 random artworks with relevant info from our call to the AIC API
			for (let i = 0; i < 6; i++) {
				// randomizer to grab random index from the returned artwork array
				const randomIndex = Math.floor(Math.random() * data.data.length);
				const randomArtwork = data.data[randomIndex];

				// push the random artwork to the array with url, title, date, and alt-text (if necessary details present)
				if (
					randomIndexArray.includes(randomIndex) ||
					!randomArtwork.image_id ||
					(randomArtwork.artist_title !== selectedArtist.name &&
						randomArtwork.artist_title !== selectedArtist.name + " (Emmanuel Radnitzky)")
				) {
					// if doesn't meet criteria, decrement i
					i--;
				} else {
					randomIndexArray.push(randomIndex);
					// otherwise, make URL and push to array
					// Concatenate the random artwork image id with the iiif url to get the image url
					const randomArtworkImageURL =
						data.config.iiif_url +
						"/" +
						randomArtwork.image_id +
						"/full/843,/0/default.jpg";
					console.log(randomArtwork.artist_title);
					arrayOfRandomImages.push({
						url: randomArtworkImageURL,
						title: randomArtwork.title,
						date:
							randomArtwork.date_display === "n.d."
								? randomArtwork.date_end
								: randomArtwork.date_display,
						alt:
							randomArtwork.thumbnail && randomArtwork.thumbnail.alt_text
								? randomArtwork.thumbnail.alt_text
								: "A work entitled " + randomArtwork.title + " by " + selectedArtist.name,
					});
				}
			}
			// set the state of the featuredArtistImageInfo array to the arrayOfRandomImages (for asynchronous nature of state defining)
			setFeaturedArtistImageInfo(arrayOfRandomImages);
		} catch (error) {
			console.log(error);
		}
	};

	const selectRandomArtist = () => {
		const artistArray = [
			{
				name: "Marcel Duchamp",
				src: "/images/PortraitofMarcelDuchampManRay.jpg",
				alt: "Man Ray's Portrait of Marcel Duchamp, 1920-1921",
			},
			{
				name: "Man Ray",
				src: "/images/ManRayInParis.jpg",
				alt: "Man Ray in Paris, 1934",
			},
			{
				name: "Francis Picabia",
				src: "/images/ExcerptofFrancisPicabiaInsideDansedeSaint-Guy.jpg",
				alt: "Excerpt of Francis Picabia's Inside Danse de Saint-Guy, 1923",
			},
			{
				name: "Kurt Schwitters",
				src: "/images/KurtSchwittersPortraitYale.jpg",
				alt: "Studio portrait of Kurt Schwitters in his thirties. Dreier archive, Yale University.",
			},
			{
				name: "Jean (Hans) Arp",
				src: "/images/JeanArpinthe60s.jpg",
				alt: "Jean Arp, c. 1960.",
			},
			{
				name: "Max Ernst",
				src: "/images/MaxErnstExcerptPunchingBallOrTheImmortalityOfBuonarroti.jpeg",
				alt: "Excerpt from Punching Ball Or The Immortality Of Buonarroti by Max Ernst, 1920",
			},
		];

		// randomizer to select artist from array
		const artistIndex = Math.floor(Math.random() * artistArray.length);
		setSelectedArtist(artistArray[artistIndex]);
	};

	// call function on page load
	useEffect(() => {
		selectRandomArtist();
	}, []);

	// call function on selectedArtist defined
	useEffect(() => {
		if (!selectedArtist.name) {
			return;
		}
		console.log(selectedArtist);
		fillFeaturedArtistImages();
	}, [selectedArtist]);

	// use effect for setting loading state to false once featuredArtistImageInfo array is filled
	useEffect(() => {
		if (featuredArtistImageInfo.length === 6) {
			// console.log(featuredArtistImageInfo);
			const timeout = setTimeout(() => {
				setLoadingArtist(false);
				setLoadingArt(false);
			}, 1000);
		}
	}, [featuredArtistImageInfo]);

	const handleClickArtist = () => {
		setLoadingArtist(true);
		setLoadingArt(true);
		selectRandomArtist();
	};

	const handleClickArt = () => {
		setLoadingArt(true);
		fillFeaturedArtistImages();
	};

	// async function getMetTestResponse() {
	// 	const response = await fetch("/api/met/", {
	// 		method: "GET",
	// 	});
	// 	const data = await response.json();
	// 	console.log(data);
	// }

	// useEffect(() => {
	// 	getMetTestResponse();
	// }, []);

	// const scrollBoxRef = useRef(null);
	// const [scrollDirection, setScrollDirection] = useState({
	// 	left: false,
	// 	right: false,
	// 	up: false,
	// 	down: true,
	// });

	// // if check to see window size and set scrollDirection accordingly
	// useEffect(() => {
	// 	if (window.innerWidth < 992) {
	// 		setScrollDirection({
	// 			left: false,
	// 			right: true,
	// 			up: false,
	// 			down: false,
	// 		});
	// 	}
	// }, [loading]);

	// useEffect(() => {
	// 	const scrollBox = scrollBoxRef.current;
	// 	// const isScrollable = scrollBox.scrollWidth > scrollBox.clientWidth;

	// 	const handleScroll = () => {
	// 		const isScrollableX = scrollBox.scrollWidth > scrollBox.clientWidth;
	// 		const isScrollableY = scrollBox.scrollHeight > scrollBox.clientHeight;

	// 		setScrollDirection({
	// 			left: scrollBox.scrollLeft > 0 && isScrollableX,
	// 			right:
	// 				scrollBox.scrollLeft < scrollBox.scrollWidth - scrollBox.clientWidth &&
	// 				isScrollableX,
	// 			up: scrollBox.scrollTop > 0 && isScrollableY,
	// 			down:
	// 				scrollBox.scrollTop < scrollBox.scrollHeight - scrollBox.clientHeight &&
	// 				isScrollableY,
	// 		});
	// 	};

	// 	scrollBox.addEventListener("scroll", handleScroll);
	// 	window.addEventListener("resize", handleScroll);

	// 	return () => {
	// 		scrollBox.removeEventListener("scroll", handleScroll);
	// 		window.removeEventListener("resize", handleScroll);
	// 	};
	// }, [loading]);

	// useEffect(() => {
	// 	console.log(scrollDirection);
	// }, [scrollDirection]);

	return (
		<Box py={6} mx={{ sm: 8, md: 8, lg: 16 }}>
			<SectionHeader headerText="Featured Artist" />
			<Grid
				templateColumns={{ base: "1fr", lg: "2.5fr .25fr 3fr" }}
				// templateRows={{ base: "1fr .00001fr 1fr", lg: "1fr" }}
				height={{ base: "auto", lg: "40vw" }}
				gap={{ sm: 4, md: 8, lg: 16 }}
				mx="5%"
			>
				{loadingArtist ? (
					<Flex
						justify="center"
						direction="column"
						width="100%"
						height="100%"
						align="center"
					>
						<Loader />
					</Flex>
				) : (
					<Flex
						mb={{ base: 4, sm: 0 }}
						width="100%"
						direction="column"
						align="center"
						justify="space-around"
					>
						<Flex
							direction="column"
							justify="space-between"
							align="center"
							width="100%"
							height="80%"
						>
							<Flex
								justify="center"
								width={{ base: "40%", md: "35%", lg: "70%" }}
								position="relative"
								mb={4}
							>
								<Image
									src={selectedArtist.src}
									alt={selectedArtist.alt}
									borderRadius="md"
								/>
								<Box
									padding="5px"
									textStyle="playfairBold"
									fontSize={{
										sm: "16px",
										md: "18px",
										lg: "20px",
										xl: "26px",
									}}
									letterSpacing={{ sm: "0.1em", md: "0.15em", lg: "0.2em" }}
									borderRadius="md"
									textAlign="center"
									position="absolute"
									bottom={6}
									maxWidth={{ base: "70%", md: "75%", "2xl": "100%" }}
									bgColor="rgba(83, 68, 61, 0.5)"
									color="white"
									style={{
										backdropFilter: "blur(3px)",
										WebkitBackdropFilter: "blur(3px)",
									}}
								>
									{selectedArtist.name}
								</Box>
							</Flex>

							<Flex direction="row" justify="space-between" gap={3}>
								<Button2 buttonText="Randomize Artist" functionCall={handleClickArtist} />
								<Button2 buttonText="Randomize Art" functionCall={handleClickArt} />
							</Flex>
						</Flex>
					</Flex>
				)}
				{windowWidth >= 992 ? (
					<Divider mt={4} height="90%" borderColor="#B1BAC1" orientation="vertical" />
				) : (
					<Divider
						mt={12}
						borderColor="#B1BAC1"
						orientation="horizontal"
						justifySelf="center"
					/>
				)}
				{loadingArt ? (
					<Flex
						direction="column"
						justify="center"
						width="100%"
						height="100%"
						align="center"
					>
						<Loader number={{ base: 20, lg: 0 }} />
					</Flex>
				) : (
					<Box
						// ref={scrollBoxRef}
						overflowY={{ base: "hidden", lg: "scroll" }}
						overflowX={{ base: "scroll", lg: "hidden" }}
						position="relative"
						width="100%"
						mt={{ base: 4, lg: 12 }}
						borderRadius="md"
					>
						{/* <Box pointerEvents="none" width="100%" height="100%" position="absolute">
						{scrollDirection.left && (
							<Box position="absolute" height="100%" left="0" zIndex="1">
								Left
							</Box>
						)}
						{scrollDirection.right && (
							<Box position="absolute" height="100%" right="0" zIndex="1">
								Right
							</Box>
						)}
						{scrollDirection.up && (
							<Box position="absolute" width="100%" top="0" zIndex="1">
								Up
							</Box>
						)}
						{scrollDirection.down && (
							<Box position="absolute" width="100%" bottom="0" zIndex="1">
								Down
							</Box>
						)}
					</Box> */}
						<Flex
							direction={{ base: "row", lg: "column" }}
							my={{ base: 4, lg: 0 }}
							position="relative"
							width={{ base: "330%", md: "270%", lg: "auto" }}
							justify="space-around"
						>
							{featuredArtistImageInfo.map((image, index) => {
								const flexDirection =
									index % 2 === 0
										? { base: "column-reverse", lg: "row-reverse" }
										: { base: "column", lg: "row" };
								const alignment =
									index % 2 === 0
										? { base: "flex-start", lg: "flex-end" }
										: { base: "flex-end", lg: "flex-start" };
								const textAlign =
									index % 2 === 0
										? { base: "left", lg: "right" }
										: { base: "right", lg: "left" };

								return (
									<FeaturedImage
										key={index}
										flexDirection={flexDirection}
										alignment={alignment}
										textAlign={textAlign}
										title={image.title}
										date={image.date}
										url={image.url}
										alt={image.alt}
									/>
								);
							})}
						</Flex>
					</Box>
				)}
			</Grid>
		</Box>
	);
}

export default Featured;
