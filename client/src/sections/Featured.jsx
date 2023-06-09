// Necessary imports from Chakra, React, and other components
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import FeaturedImage from "../components/FeaturedImage";
import BrandButton from "../components/BrandButton";
import Loader from "../components/Loader";

// Setting up constants for artist array with links to images and alt text
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

function Featured() {
	// Establish states for the featured artist and artwork
	const [featuredArtistImageInfo, setFeaturedArtistImageInfo] = useState([]);
	const [loadingArtist, setLoadingArtist] = useState(true);
	const [loadingArt, setLoadingArt] = useState(true);
	const [selectedArtist, setSelectedArtist] = useState({});
	// Separate state for scroll direction in scrollable art box
	const [scrollDirection, setScrollDirection] = useState({
		left: false,
		right: false,
		up: false,
		down: true,
	});

	// Function to pull random images from the AIC API for Duchamp (in future, use state to determine artist)
	const fillFeaturedArtistImages = async () => {
		try {
			// Fetch request to AIC api for featured artist
			const featuredArtist = selectedArtist.name
				.toLowerCase()
				.replace(" ", "-")
				.replace("(hans) ", "");
			const response = await fetch(`/api/aic/${featuredArtist}`, {
				method: "GET",
			});
			const data = await response.json();

			// Set up array to hold random images (to deal for asynchronous nature of state defining)
			const arrayOfRandomImages = [];
			const randomIndexArray = [];

			// For loop to grab 6 random artworks with relevant info from our call to the AIC API
			for (let i = 0; i < 6; i++) {
				// randomizer to grab random index from the returned artwork array
				const randomIndex = Math.floor(Math.random() * data.data.length);
				const randomArtwork = data.data[randomIndex];

				// Push the random artwork to the array with url, title, date, and alt-text (if necessary details present)
				if (
					randomIndexArray.includes(randomIndex) ||
					!randomArtwork.image_id ||
					(randomArtwork.artist_title !== selectedArtist.name &&
						randomArtwork.artist_title !== selectedArtist.name + " (Emmanuel Radnitzky)")
				) {
					// If doesn't meet criteria, decrement i
					i--;
				} else {
					randomIndexArray.push(randomIndex);
					// Otherwise, make URL and push to array
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
			// Set the state of the featuredArtistImageInfo array to the arrayOfRandomImages (for asynchronous nature of state defining)
			setFeaturedArtistImageInfo(arrayOfRandomImages);
		} catch (error) {
			console.log(error);
		}
	};

	// Function to select random artist from constant array established above
	const selectRandomArtist = () => {
		// Randomizer to select artist from array
		const artistIndex = Math.floor(Math.random() * artistArray.length);
		// Set state
		setSelectedArtist(artistArray[artistIndex]);
	};

	// Call above function on page load
	useEffect(() => {
		selectRandomArtist();
	}, []);

	// Call API and grab art information for artist once selectedArtist is changed
	useEffect(() => {
		// Check to make sure artist has been selected
		if (!selectedArtist.name) {
			return;
		}
		fillFeaturedArtistImages();
	}, [selectedArtist]);

	// Handles for loading of art and artist from randomizer function and API – timer to show off built loader
	useEffect(() => {
		if (featuredArtistImageInfo.length === 6) {
			// console.log(featuredArtistImageInfo);
			const timeout = setTimeout(() => {
				setLoadingArtist(false);
				setLoadingArt(false);
			}, 1000);
		}
	}, [featuredArtistImageInfo]);

	// Click handler to ping relevant functions when randomizing artist from button click
	const handleClickArtist = () => {
		// Set loading to true to show loader
		setLoadingArtist(true);
		setLoadingArt(true);
		// Reselect artist, which calls the fillFeaturedArtistImage function
		selectRandomArtist();
	};

	// Same as above, but only for art
	const handleClickArt = () => {
		setLoadingArt(true);
		// Reselect art
		fillFeaturedArtistImages();
	};

	// Logic to detect which direction user can scroll in scroll bar. Originally intended for one feature, now handling webkit scrollbar border radius conditional rendering
	// Sets up ref to scrollable box
	const scrollBoxRef = useRef(null);

	// Once art has loaded (if check for scrollBox existing), add event listener to scrollBox to detect scroll (and handle page resizing)
	useEffect(() => {
		// Connection to scrollbox
		const scrollBox = scrollBoxRef.current;

		if (!scrollBox) {
			return;
		}

		// Logic to detect which direction user can scroll in scrollbox
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

		// event listeners for scrolling and resizing
		scrollBox.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleScroll);

		// Cleanup
		return () => {
			scrollBox.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, [loadingArt]);

	// Testing to see if scroll direction is being set correctly
	// useEffect(() => {
	// 	console.log(scrollDirection);
	// }, [scrollDirection]);

	return (
		<Box pt={6} pb={12} mx={{ sm: 8, md: 8, lg: 16 }}>
			<SectionHeader headerText="Featured Artist" />
			<Grid
				templateColumns={{ base: "1fr", lg: "2.5fr  3fr" }}
				height={{ base: "fit-content", lg: "40vw" }}
				mx="5%"
				gap={{ base: "0%", lg: "5%" }}
			>
				{/* Conditional rendering of loader or Artist image */}
				{loadingArtist ? (
					<Flex justify="center" align="center" mb={{ base: 6, lg: 0 }}>
						<Loader />
					</Flex>
				) : (
					<Flex width="100%" direction="column" align="center" justify="space-around">
						<Flex
							direction="column"
							justify="space-around"
							align="center"
							width="100%"
							height="100%"
						>
							<Flex
								justify="center"
								width={{ base: "40%", md: "35%", lg: "65%" }}
								position="relative"
								mb={4}
							>
								<Image
									src={selectedArtist.src}
									alt={selectedArtist.alt}
									borderRadius="md"
									boxShadow="dark-lg"
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

							<Flex direction="row" justify="space-between" gap={3} pb={4}>
								{/* Use of Brand Button with appropriation functions for onClick */}
								<BrandButton
									buttonText="Randomize Artist"
									functionCall={handleClickArtist}
								/>
								<BrandButton buttonText="Randomize Art" functionCall={handleClickArt} />
							</Flex>
						</Flex>
					</Flex>
				)}
				{/* Conditional rendering of loader or art images */}
				{loadingArt ? (
					<Flex justify="center" align="center" my={{ base: 6, lg: 0 }}>
						<Loader />
					</Flex>
				) : (
					<Box
						ref={scrollBoxRef}
						pt={4}
						overflowY={{ base: "hidden", lg: "scroll" }}
						overflowX={{ base: "scroll", lg: "hidden" }}
						position="relative"
						width="100%"
						height={{ base: "fit-content", lg: "auto" }}
						borderRadius="md"
						boxShadow="inset 1px 1px 6px rgba(0, 0, 0, 0.4)"
						sx={{
							"&::-webkit-scrollbar": {
								backgroundColor: "transparent",
							},
							"&::-webkit-scrollbar-thumb": {
								backgroundColor: "#53443D",
								boxShadow: "xl",
								borderTopRightRadius: { base: "0", lg: scrollDirection.up ? "0" : "md" },
								borderBottomRightRadius: {
									base: scrollDirection.right ? "0" : "md",
									lg: scrollDirection.down ? "0" : "md",
								},
								borderBottomLeftRadius: {
									base: scrollDirection.left ? "0" : "md",
									lg: "0",
								},
							},
						}}
					>
						<Flex
							direction={{ base: "row", lg: "column" }}
							width={{ base: "330%", md: "270%", lg: "auto" }}
							justify="space-around"
						>
							{/* Map through random art selected from API */}
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
