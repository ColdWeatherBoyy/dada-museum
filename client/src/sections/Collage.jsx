import {
	Box,
	Radio,
	RadioGroup,
	Stack,
	Button,
	Heading,
	SimpleGrid,
	Card,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "../components/SectionHeader";
import CollageElement from "../components/CollageElement";
import CollagePreview from "../components/CollagePreview";

function Collage() {
	const collageBoundary = useRef();
	const [collageElements, setCollageElements] = useState([]);
	const [textValue, setTextValue] = useState("D");
	const [fontValue, setFontValue] = useState("serif");
	const [fontSize, setFontSize] = useState("small");
	const textOptions = ["D", "A", "d", "a", "!", "?"];
	const fontOptions = ["serif", "sans-serif"];
	const sizeOptions = ["small", "medium", "large"];

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

	useEffect(() => {
		// console.log(collageElements);
	}, []);

	const clearCanvas = () => {
		setCollageElements([]);
	};

	return (
		<Box paddingY={16} w="100%" minH="90vh" backgroundColor="gray.100">
			<SectionHeader headerText="Make a Collage" />
			<SimpleGrid
				columns={{ sm: 1, md: 2 }}
				spacingX={{ sm: 0, md: 8, lg: 16 }}
				spacingY={20}
				mx={{ sm: 8, md: 8, lg: 16 }}
				justifyContent="center"
			></SimpleGrid>
			<Box
				display="flex"
				flexDirection={{ base: "column", md: "row" }}
				justifyContent="space-between"
				alignItems={{ base: "center", md: "left" }}
				mx={{ sm: 8, md: 8, lg: 16 }}
			>
				<Card
					bgColor="white"
					w={{ base: "80%", md: "40%" }}
					minH={{ base: "40vh", md: "50vh" }}
					p="0"
					my={{ base: "5%", md: "0%" }}
					ref={collageBoundary}
				>
					{collageElements.map((element, index) => {
						return (
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
					w={{ base: "80%", md: "55%" }}
					minH="60vh"
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
					<Box
						display="flex"
						flexDirection={{ base: "column", md: "row" }}
						justifyContent="space-around"
						w="100%"
						px={{ base: "5%", md: "0%" }}
					>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent="space-around"
							alignItems="center"
						>
							<RadioGroup
								onChange={setTextValue}
								value={textValue}
								textStyle="battambang"
							>
								<Stack direction="row">
									<Radio value="D">D</Radio>
									<Radio value="A">A</Radio>
									<Radio value="d">d</Radio>
									<Radio value="a">a</Radio>
								</Stack>
								<Stack direction="row">
									<Radio value="!">!</Radio>
									<Radio value="?">?</Radio>
								</Stack>
							</RadioGroup>
							<RadioGroup
								onChange={setFontValue}
								value={fontValue}
								textStyle="battambang"
							>
								<Stack direction="column">
									<Radio value="serif">Serif</Radio>
									<Radio value="sans-serif">Sans-Serif</Radio>
								</Stack>
							</RadioGroup>
							<RadioGroup onChange={setFontSize} value={fontSize} textStyle="battambang">
								<Stack direction="column">
									<Radio value="small">Small</Radio>
									<Radio value="medium">Medium</Radio>
									<Radio value="large">Large</Radio>
								</Stack>
							</RadioGroup>
						</Box>
						<Box
							bgColor="gray.100"
							w="250px"
							aspectRatio="1 / 1"
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignSelf="center"
							alignItems="center"
						>
							<CollagePreview classText={fontValue + " " + fontSize} text={textValue} />
						</Box>
					</Box>
					<Box
						display="flex"
						flexDirection={{ base: "column", md: "row" }}
						w="60%"
						justifyContent="space-between"
					>
						<Button onClick={addShape} textStyle="battambang">
							Add Selected
						</Button>
						<Button onClick={addRandom} textStyle="battambang">
							Add Random
						</Button>
						<Button onClick={clearCanvas} textStyle="battambang">
							Clear
						</Button>
					</Box>
				</Card>
			</Box>
		</Box>
	);
}

export default Collage;
