// Necessary imports from Chakra, React, and other components
import {
	Box,
	Radio,
	RadioGroup,
	Stack,
	Heading,
	Card,
	Flex,
	Grid,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "../components/SectionHeader";
import CollageElement from "../components/CollageElement";
import CollagePreview from "../components/CollagePreview";
import BrandButton from "../components/BrandButton";

function Collage() {
	// Setting up ref for boundary of collage
	const collageBoundary = useRef();
	// State for collage elements selected
	const [collageElements, setCollageElements] = useState([]);
	// States for collage elements selecting
	const [textValue, setTextValue] = useState("D");
	const [fontValue, setFontValue] = useState("serif");
	const [fontSize, setFontSize] = useState("small");
	// Setting up constants
	const textOptions = ["D", "A", "d", "a", "!", "?"];
	const fontOptions = ["serif", "sans-serif"];
	const sizeOptions = ["small", "medium", "large"];

	// Function to handle adding specific shape to collage
	const addShape = () => {
		console.log("submitted");
		const newShape = {
			text: textValue,
			font: fontValue,
			size: fontSize,
		};
		const newArray = [...collageElements, newShape];
		setCollageElements(newArray);
	};

	// Function to handle adding random shape to collage
	const addRandom = () => {
		console.log("submitted");
		const textRand = Math.floor(Math.random() * textOptions.length);
		const fontRand = Math.floor(Math.random() * fontOptions.length);
		const sizeRand = Math.floor(Math.random() * sizeOptions.length);
		const newShape = {
			text: textOptions[textRand],
			font: fontOptions[fontRand],
			size: sizeOptions[sizeRand],
		};
		const newArray = [...collageElements, newShape];
		setCollageElements(newArray);
	};

	// Use effect for testing purposes
	// useEffect(() => {
	// 	// console.log(collageElements);
	// }, []);

	// Function to handle clearing canvas
	const clearCanvas = () => {
		setCollageElements([]);
	};

	return (
		<Box
			pt={6}
			pb={12}
			w="100%"
			backgroundColor="gray.100"
			boxShadow="inset 4px 4px 10px rgba(0, 0, 0, 0.2), inset -4px -8px 10px rgba(0, 0, 0, 0.2)"
		>
			<Box mx={{ sm: 8, md: 8, lg: 16 }}>
				<SectionHeader headerText="Make a Collage" />
				<Box
					display="flex"
					flexDirection={{ base: "column", md: "row" }}
					justifyContent="space-between"
					alignItems={{ base: "center", md: "left" }}
					mx="5%"
				>
					<Card
						bgColor="white"
						w={{ base: "100%", md: "40%" }}
						minH={{ base: "40vh", md: "50vh" }}
						p="0"
						my={{ base: 3, md: 0 }}
						ref={collageBoundary}
					>
						{collageElements.map((element, index) => {
							return (
								// Use of Collage Element component
								<CollageElement
									collageBoundary={collageBoundary}
									classText={element.font + " " + element.size}
									text={element.text}
									key={index}
								/>
							);
						})}
					</Card>
					<Card
						bgColor="white"
						w={{ base: "100%", md: "55%" }}
						my={{ base: 3, md: 0 }}
						minH={{ base: "40vh", md: "50vh" }}
						display="flex"
						flexDirection="column"
						justifyContent="space-around"
						alignItems="center"
					>
						<Heading
							variant="exhibit-heading"
							textAlign="left"
							fontSize="1.25em"
							pb={0}
							mb="1em"
						>
							Collage Elements:
						</Heading>
						<Flex
							width={{ base: "90%", sm: "100%" }}
							justify={{ base: "space-evenly", sm: "center" }}
						>
							{/* Responsively designed stack/grids with collage options */}
							<Box display="flex" flexDirection="column" w="50%" px="3%">
								<RadioGroup
									onChange={setTextValue}
									value={textValue}
									textStyle="robotoSlab"
									my={3}
								>
									<Grid templateColumns="repeat(3, 1fr)" gap={4} width="60%">
										<Stack direction="column">
											<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="D">
												D
											</Radio>
											<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="A">
												A
											</Radio>
										</Stack>
										<Stack direction="column">
											<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="d">
												d
											</Radio>
											<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="a">
												a
											</Radio>
										</Stack>
										<Stack direction="column">
											<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="!">
												!
											</Radio>
											<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="?">
												?
											</Radio>
										</Stack>
									</Grid>
								</RadioGroup>
								<RadioGroup
									onChange={setFontValue}
									value={fontValue}
									textStyle="robotoSlab"
									my={3}
								>
									<Stack direction="column">
										<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="serif">
											Serif
										</Radio>
										<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="sans-serif">
											Sans-Serif
										</Radio>
									</Stack>
								</RadioGroup>
								<RadioGroup
									onChange={setFontSize}
									value={fontSize}
									textStyle="robotoSlab"
									my={3}
								>
									<Stack direction="column">
										<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="small">
											Small
										</Radio>
										<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="medium">
											Medium
										</Radio>
										<Radio size={{ base: "sm", md: "md", lg: "lg" }} value="large">
											Large
										</Radio>
									</Stack>
								</RadioGroup>
							</Box>
							<Box
								bgColor="gray.100"
								w={{ sm: "50%", md: "40%", lg: "35%" }}
								aspectRatio="1 / 1"
								display="flex"
								flexDirection="column"
								justifyContent="center"
								alignSelf="center"
								alignItems="center"
								borderRadius="5px"
								mx="3%"
							>
								<CollagePreview classText={fontValue + " " + fontSize} text={textValue} />
							</Box>
						</Flex>
						<Box
							display="flex"
							flexDirection="row"
							w="100%"
							px={{ base: 0, md: 8 }}
							justifyContent="space-evenly"
							pb={{ base: 4, md: 0 }}
						>
							{/* Function calls on Brand Button component */}
							<BrandButton functionCall={clearCanvas} buttonText="Clear" />
							<BrandButton functionCall={addRandom} buttonText="Add Random" />
							<BrandButton functionCall={addShape} buttonText="Add Selected" />
						</Box>
					</Card>
				</Box>
			</Box>
		</Box>
	);
}

export default Collage;
